import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent, UserJSON } from '@clerk/nextjs/server'

interface SvixHeaders {
  "svix-id"?: string;
  "svix-timestamp"?: string;
  "svix-signature"?: string;
}

/**
 * This server-side function handles POST requests coming from Clerk via Svix webhooks. It verifies the
 * authenticity of incoming webhook events using the Svix library and processes user-related events
 * such as creation, updates, and deletion. It uses the Clerk-provided `UserJSON` data structure for
 * user data and performs CRUD operations on a MongoDB database accordingly, by making calls to
 * designated API endpoints for each operation.

 * It is essential to set the `WEBHOOK_SECRET` environment variable to the value provided by Clerk in
 * the dashboard for webhook verification to succeed. This function expects to receive Svix webhook
 * events with headers containing `svix-id`, `svix-timestamp`, and `svix-signature` for security
 * purposes. If any of these headers are missing, or if the webhook payload cannot be verified, it
 * responds with an HTTP 400 error.

 * On successful verification of the webhook payload, it identifies the event type (`user.created`,
 * `user.updated`, `user.deleted`) and performs the corresponding database operation. For `user.created`
 * and `user.updated` events, it extracts the user data from the event payload and sends it to
 * the appropriate API endpoint. For `user.deleted` events, it only requires the user ID for
 * the operation. Errors encountered during API calls are logged to the console.

 * This function demonstrates a practical implementation of handling webhook events in a server-side
 * environment, showcasing how to securely verify the source of the event, parse the event data,
 * and act upon it by integrating with external systems or databases.

 * Environment Variables:
 * - `WEBHOOK_SECRET`: A secret key provided by Clerk used to verify the authenticity of incoming webhooks.

 * Usage:
 * Deploy this function as part of a serverless function or a server route handler that listens
 * for POST requests. Ensure that the environment variable `WEBHOOK_SECRET` is correctly set in
 * your deployment environment.

 * Example Request Headers:
 * ```
 * svix-id: <unique-id>
 * svix-timestamp: <timestamp>
 * svix-signature: <signature>
 * ```

 * Example Payload:
 * ```
 * {
 *   "type": "user.created",
 *   "data": {
 *     "id": "user_123",
 *     "first_name": "Jane",
 *     "last_name": "Doe",
 *     "username": "janedoe",
 *     ...
 *   }
 * }
 * ```

 * @param {Request} req The incoming request object, containing headers and a JSON body with the webhook event data.
 */
export default async function POST(req: Request) {
  if  (req.method === 'POST') {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
  
    if (!WEBHOOK_SECRET) {
      throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }
  
    // Get the headers
    const {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature
    } = req.headers as SvixHeaders;
  
    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occured -- no svix headers', {
        status: 400
      })
    }
  
    // Get the body
    const payload = req.body;
    const body = JSON.stringify(payload);
  
    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);
  
    let evt: WebhookEvent
  
    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent
    } catch (err) {
      console.error('Error verifying webhook:', err);
      return new Response('Error occured', {
        status: 400
      })
    }
  
    // Get the ID and type
    const { id } = evt.data; // This is from the Clerk provider, so it is guaranteed to be unique as it is how they internally identify users
    const eventType = evt.type;
  
    console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
    console.log('Webhook body:', body)

    if (eventType === "user.created" || eventType === "user.updated" || eventType === "user.deleted") {
      // Assuming evt.data can be safely cast to UserJSON for these event types
      let userData = evt.data as UserJSON;


      const postData = {
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        userName: userData.username,
        email: userData.email_addresses?.[0], // In general an email address is always expected as any provider will usually always require an email address
        phone: userData.phone_numbers?.[0],
        createdAt: userData.created_at,
      };

      if (userData) {
        switch (eventType) {
          case 'user.created':
            // Create user in MongoDB
            console.log(`Creating user: ${postData.firstName} ${postData.lastName}`);
            try {
              const response = await fetch('http://localhost:3000/api/registration', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              });
          
              if (!response.ok) {
                console.error('Failed to register user through API:', await response.text());
              } else {
                console.log('User registered successfully through API');
              }
            } catch (error) {
              console.error('Error calling registration API:', error);
            }
            break;
          case 'user.updated':
            // Update user data in MongoDB
            console.log(`Updating user: ${postData.firstName} ${postData.lastName}`);
            try {
              const response = await fetch('http://localhost:3000/api/update-user-data', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              });
          
              if (!response.ok) {
                console.error('Failed to update user through API:', await response.text());
              } else {
                console.log('User updated successfully through API');
              }
            } catch (error) {
              console.error('Error calling update user data API:', error);
            }
            break;
          case 'user.deleted':
            // Delete user in MongoDB
            console.log(`Deleting user: ${postData.firstName} ${postData.lastName}`);
            try {
              const response = await fetch('http://localhost:3000/api/delete-user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                // Stringify the whole object, not just the id
                body: JSON.stringify({ id: postData.id }), // postData contains the id field
              });
              
              if (!response.ok) {
                console.error('Failed to update user through API:', await response.text());
              } else {
                console.log('User updated successfully through API');
              }
            } catch (error) {
              console.error('Error calling update user data API:', error);
            }
            break;
        }
      }
    }
  }
}
 