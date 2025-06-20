import NextAuth from "next-auth"

import { apiAuthPrefix, authRoutes, LOGIN_REDIRECT, publicRoute } from "./routes";
import authConfig from "./auth.config";
 
 const { auth: middleware } = NextAuth(authConfig)

export default middleware((req) => {
  const { nextUrl} = req;
  const isLoggedIn = !!req.auth;
  // console.log("pathname>>>", nextUrl.pathname, isLoggedIn);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoute.includes(nextUrl.pathname);
  const isAutRoute = authRoutes.includes(nextUrl.pathname);
  
  if (isApiAuthRoute) {
    return
  }
  if (isAutRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(LOGIN_REDIRECT,nextUrl))
    }
    return
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login",nextUrl))
  }

  return;
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}