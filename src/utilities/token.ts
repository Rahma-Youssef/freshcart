"use server";


import { authOptions } from "@/auth";

import { getServerSession } from "next-auth";

export async function getMyToken() {
  const session = await getServerSession(authOptions);


  return session?.token || null;
}