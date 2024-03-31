import { authMiddleware } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
 
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: [
    '/',
    '/api/webhooks/clerk-mongodb-sync',
    '/api/ably-auth',
    '/api/add-friend',
    '/api/delete-user',
    '/api/FriendsTab',
    '/api/get-ids-of-friends',
    '/api/get-usernames-of-friends',
    '/api/get-message-history',
    '/api/getServersListOfUser',
    '/api/initializingServerList',
    '/api/login',
    '/api/registration',
    '/api/servers',
    '/api/testMongoDB',
    '/api/update-message-history',
    '/api/update-user-data',
    '/api/userSettings'
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