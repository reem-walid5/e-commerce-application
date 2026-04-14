import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from 'jwt-decode';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "free shipping",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Ali@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("CREDENTIALS:", credentials);
        try {
          const res = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            },
          );

          const finalRes = await res.json();
          console.log("finalRes", finalRes);
          if (res.ok && finalRes.token && finalRes.user) {
            const data:{id : string} = jwtDecode(finalRes.token)
            return {
              id:data.id,
              name: finalRes.user.name,
              email: finalRes.user.email,
              credentialsToken : finalRes.token,
            };
          }
        } catch (error) {
          console.log("AUTH ERROR:", error);
          throw new Error("Authentication failed"); 
        }
      },
    }),
  ],
  // jwt: { maxAge: 60 * 60 * 24 * 3 },
  pages: { signIn: "/LogIn" },
  callbacks: {
  jwt({ token, user }) {
    if (user) {
      token.routeToken = (user as any).credentialsToken;
      token.id = user.id;
    }
    return token;
  },

  session({ session, token }) {
    (session as any).routeToken = token.routeToken;
    (session as any).id = token.id;
    return session;
  },
}
};
