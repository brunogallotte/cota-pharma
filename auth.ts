import NextAuth, { AuthError } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma/prisma"
import { compare } from "bcryptjs"

export const { handlers, auth, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 10 * 60, // 10 min
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          return null
        }

        const email = credentials.email as string
        const password = credentials.password as string

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          throw new AuthError('Invalid credentials!', {
            cause: 'invalid credentials',
          })
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
          throw new AuthError('Invalid credentials!', {
            cause: 'invalid credentials',
          })
        }

        return {
          id: user.id,
          email: user.email,
          type: user.type,
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: token.sub
        }
      })

      return {
        ...session,
        user: {
          id: user.id,
          email: user.email,
          type: user.type
        }
      };
    },
  },
})