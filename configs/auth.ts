import CredentialsProvider from "next-auth/providers/credentials";
import YandexProvider from "next-auth/providers/yandex";
import { DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig:NextAuthOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          requered: true,
          placeholder: "email"
        },
        password: {
          label: "password",
          type: "password",
          requered: true,
          placeholder: "password"
        }
      } as any,
      async authorize(credentials) {
        const user = { id: "1", password: "1111", email: "jsmith@example.com", name: "Anonimus" };
        if (credentials.email && credentials.password) {
          if(user.email === credentials.email && credentials.password === user.password){
            const {password, ...currentUser} =user
            return currentUser
          } else {
            return null;
          }

        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
};

export type CredentialInput = {
  label?: string
  type?: string
  value?: string
  placeholder?: string
  requered?: boolean
}
