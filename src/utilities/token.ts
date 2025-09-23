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

import { authOption } from "@/auth";
// import { authOption } from "@/app/api/auth/[...nextauth]/options"; 
import { getServerSession } from "next-auth";

export async function getMyToken() {
  const session = await getServerSession(authOption);

  // التوكن اللي رجعناه في jwt callback
  return session?.token || null;
}