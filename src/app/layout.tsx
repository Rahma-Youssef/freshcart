import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./_componets/Navbar/Navbar";
import "swiper/css";
import Footer from "./_componets/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/Providers";
// import favicon from "./../../public/assets/App_Store_(iOS)-Badge-Logo.wine.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "E-commerce for all things clothes and bags , food",
  icons: {
    icon: "./../app/favicon.ico", // أو favicon.svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-white  text-gray-900    ">
      {/* <head>
        <link rel="icon" href="./../../public/assets/App_Store_(iOS)-Badge-Logo.wine.svg" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <Providers>
          <Toaster />
          <Navbar />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
