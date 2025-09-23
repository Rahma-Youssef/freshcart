// "use server"

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getMyToken() {
//     const x = (await cookies()).get("next-auth.session-token")?.value;


//     const token = await decode({
//         token: x,
//         secret: process.env.NEXTAUTH_SECRET!
//     })

//    return token?.token;
    

// }

"use server";


import { authOptions } from "@/auth";
// import { authOption } from "@/app/api/auth/[...nextauth]/options"; 
import { getServerSession } from "next-auth";

export async function getMyToken() {
  const session = await getServerSession(authOptions);


  return session?.token || null;
}