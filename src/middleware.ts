import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { apiAuthPrefix, authRoutes, LOGIN_REDIRECT, publicRoutes } from "../routes";
 
const { auth: middleware } = NextAuth(authConfig);

 
export default middleware((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log("Pathname>>>", nextUrl.pathname, isLoggedIn);

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);


  if (isApiAuthRoute) {
    return
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return
});

export const config = {
  matcher: [

    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}





// import NextAuth from 'next-auth';
// import authConfig from './auth.config';

// export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };