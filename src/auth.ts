import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import { pages } from "next/dist/build/templates/app-page";

export const authOption: NextAuthOptions = {
  pages: {
    signIn: "/Signin",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },


      authorize: async (credentials) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const data = await response.json();

        if (data.message === "success") {
          const { id }: { id: string } = jwtDecode(data.token);

          return {
            id: id,
            user: data.user,
            token: data.token,
          };
        }
        throw new Error(data.message || "failed to Signin");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user?.user;
        token.token = user?.token;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token) {
        session.user = token?.user;
      }

      return session;
    },
  },
};
