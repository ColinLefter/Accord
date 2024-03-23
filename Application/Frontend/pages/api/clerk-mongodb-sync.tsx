import type { WebhookEvent } from "@clerk/nextjs/server"
 
const handler = (req: { body: { evt: WebhookEvent; }; }) => {
  const evt = req.body.evt as WebhookEvent;
  switch (evt.type) {
    case 'user.created':
      // UserJSON.first_name is a string
      const firstName = evt.data.first_name
      // UserJSON.last_name is a string
      const lastName = evt.data.last_name
      // UserJSON.email_addresses is an array of EmailAddressJSON
      const emails = evt.data.email_addresses;
  }
}