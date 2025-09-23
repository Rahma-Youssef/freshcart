import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  const authPages = [
    "/Signin",
    "/Register",
    "/forgetPassword",
    "/verifyCode",
    "/resetPassword",
  ];
  const routes = [
    "/",
    "/products",
    "/payment",
    "/ProductDetails",
    "/Brands",
    "/Categories",
    "/Cart",
    "/WishList",
      "/allorders",
  ];

  if (token && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }

  if (!token && routes.includes(pathname)) {
    return NextResponse.redirect(new URL("/Signin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/products",
    "/payment",
    "/forgetPassword",
    "/verifyCode",
    "/resetPassword",
    "/ProductDetails",
    "/Brands",
    "/Categories",
    "/Cart",
    "/WishList",
    "/Signin",
    "/Register",
    "/allorders",
  ],
};
