import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent, UserJSON } from '@clerk/nextjs/server'
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }
 
  // Get the body
  const payload = await req.json()
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
  const { id } = evt.data;
  const eventType = evt.type;
 
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)

  if (eventType === "user.created" || eventType === "user.updated" || eventType === "user.deleted") {
    // Assuming evt.data can be safely cast to UserJSON for these event types
    let userData = evt.data as UserJSON;


    const postData = {
      firstName: userData.first_name,
      lastName: userData.last_name,
      username: userData.username,
      email: userData.email_addresses?.[0],
      phone: userData.phone_numbers?.[0],
      createdAt: userData.created_at,
    };

    if (userData) {
      switch (eventType) {
        case 'user.created':
          console.log(`Creating user: ${postData.firstName} ${postData.lastName}`);
          // Making the API call
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
          // TODO: Update user in MongoDB
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
          // TODO: Delete user from MongoDB
          console.log(`Deleting user: ${postData.firstName} ${postData.lastName}`);
          break;
      }
    }
  }

}
 