import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // Custom pages
  pages: {
    signIn: '/login',
  },

  // Callbacks for route protection / redirects
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },

  // Providers (fill in real ones later)
  providers: [],

  // ⚠️ This is required for production / serverless environments
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
