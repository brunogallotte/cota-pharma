import type { user_type } from "@/lib/generated/prisma";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    type: user_type
  }
}