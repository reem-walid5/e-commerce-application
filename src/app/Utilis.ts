// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export default async function getUserToken(): Promise<string| null> {
//     const cookie =await cookies()
//     const NextAuthToken = cookie.get('next-auth.session-token')?.value;
//     const jwtRes= await decode({secret:process.env.NEXTAUTH_SECRET || "" , token:NextAuthToken})
//     if (jwtRes) {
//         return jwtRes.routeToken as string
//     }else{
//         return null
//     }

// }
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getUserToken(): Promise<string | null> {
  const cookieStore = cookies();
  const NextAuthToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (!NextAuthToken) return null;

  const jwtRes = await decode({
    secret: process.env.NEXTAUTH_SECRET || "",
    token: NextAuthToken,
  });

  if (jwtRes) {
    return jwtRes.routeToken as string;
  }

  return null;
}
