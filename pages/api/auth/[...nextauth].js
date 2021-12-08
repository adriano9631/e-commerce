import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "lib/api/db";
// import uniqid from "uniqid";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log(profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.given_name + profile.family_name + profile.sub,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
  secret: process.env.SECRET,
});
