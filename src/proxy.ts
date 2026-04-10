import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export default async function proxy(req:NextRequest) {
  console.log("welacome again");
  
    const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
    console.log("from proxy" , token);
    
    if(!!token){
        return NextResponse.next()
    }
  return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/LogIn`)
}
export const config = {
     matcher: ["/cart","/WishList"]
}