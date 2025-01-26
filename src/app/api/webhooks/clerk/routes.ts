// import { createClerkClient } from "@clerk/backend";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
// import { creatUser } from "@/lib/actions/user.action";
// import { NextResponse } from "next/server";
// import { creatUser} from "@/lib/actions/user.action";

export async function POST(req: Request) {
  const WEBHOOK_CLERK_SECRET = process.env.WEBHOOK_CLERK_SECRET;
  // const clerkClient = createClerkClient({
  //   secretKey: process.env.CLERK_SECRET_KEY,
  // });

  if (!WEBHOOK_CLERK_SECRET) {
    throw new Error(
      "Error: Please add WEBHOOK_CLERK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(WEBHOOK_CLERK_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;

  // Create a new user in MongoDB
  // if (eventType === "user.created") {
  //   const {
  //     id,
  //     email_addresses,
  //     first_name,
  //     last_name,
  //     image_url,
  //     phone_numbers,
  //     username,
  //   } = evt.data;
  //   const user = {
  //     id,
  //     email: email_addresses[0].email_address,
  //     firstName: first_name,
  //     lastName: last_name,
  //     picture: image_url,
  //     phone: phone_numbers[0].phone_number,
  //     username: username!,
  //     role: "admin",
  //     password_enabled: true,
  //   };
  //   log(user);
  //   const newUser = await creatUser(user);
  //   console.log("New user created:", newUser);
    
  //   if (newUser) {
  //     await clerkClient.users.updateUserMetadata(id, {
  //       publicMetadata: {
  //         userId: newUser.id,
  //       },
  //     });
  //   }
  //   return NextResponse.json({ message: "New user created", user: newUser });
  // }

  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  console.log("Webhook payload:", body);
  return new Response("Webhook received", { status: 200 });
}
