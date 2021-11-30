import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    user: {
      email: string;
      image: string;
      name: string;
    };
  }
}
