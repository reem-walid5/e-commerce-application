import { authOptions } from "_/app/Nextauth/NextAuth.config";
import NextAuth from "next-auth";

const routeHandler = NextAuth(authOptions)
export{routeHandler as GET , routeHandler as POST}