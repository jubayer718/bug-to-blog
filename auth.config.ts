import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isUserPage = nextUrl.pathname.startsWith('/user/:id');
      if (isUserPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/user/:id', nextUrl));
      }
      return true;
    },
  },
  providers: [GitHub],

} satisfies NextAuthConfig