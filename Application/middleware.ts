import { authMiddleware } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
 
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: [
    '/',
    '/api/webhooks/clerk-mongodb-sync',
    '/api/ably-auth',
    '/api/accept-friend-request',
    '/api/add-friend',
    '/api/admin-promotion',
    '/api/delete-message',
    '/api/delete-user',
    '/api/get-id-from-username',
    '/api/get-ids-of-friends',
    '/api/get-message-history',
    '/api/get-pending-friend-requests',
    '/api/get-sent-friend-requests',
    '/api/get-server-list-of-users',
    '/api/get-server-members',
    '/api/get-user-text-channels',
    '/api/get-username-from-id',
    '/api/id-to-username',
    '/api/initializing-server-list',
    '/api/login',
    '/api/member-list-initializing',
    '/api/new-chat',
    '/api/registration',
    '/api/relinquish-admin',
    '/api/remove-friend',
    '/api/remove-member',
    '/api/servers',
    '/api/test-mongodb',
    '/api/update-message-history',
    '/api/update-user-data'
  ],
  // Prevent the specified routes from accessing authentication information:
  // ignoredRoutes: [''],
});
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
 
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};