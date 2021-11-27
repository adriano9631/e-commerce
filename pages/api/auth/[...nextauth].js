import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "lib/db";
import { PrismaClient } from "@prisma/client";
import uniqid from "uniqid";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        console.log(profile);
        return {
          id: uniqid(),
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.given_name + profile.family_name + uniqid(),
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
