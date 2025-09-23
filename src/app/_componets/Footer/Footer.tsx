"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import mastercardlogo from "../../../../public/assets/mastercard.png";
import americaex from "../../../../public/assets/american-express.png";
import amazon from "../../../../public/assets/amazon-pay.png";
import paypal from "../../../../public/assets/paypal.png";
import appstore from "../../../../public/assets/App_Store_(iOS)-Badge-Logo.wine.svg";
import googleplay from "../../../../public/assets/Google_Play-Badge-Logo.wine.svg";
import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status === "authenticated" && (

        <footer className=" bg-[#F0F3F2ff] text-black   ">
          <div className="w-[90%] mx-auto py-10 ">
            <div className=" border-b border-gray-300 pb-10  mb-5   ">
              <h1 className="text-2xl">Get the FreshCart app</h1>

              <p className="text-gray-500 py-3">
                We will send you a link, open it on your phone to download the
                app
              </p>

              <div className="flex items-center gap-4 md:p-3">
                <Input type="email" placeholder="Email" className="bg-white " />
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-[#08AC0Aff] hover:bg-[#0a7d0c] md:text-lg text-[13px] hover:cursor-pointer hover:text-white text-white md:px-8"
                >
                  Share App Link
                </Button>
              </div>
            </div>

            {/* payment section */}
            <div className="border-b border-gray-300 pt-0  pb-5 flex flex-wrap  lg:justify-between justify-center">
              <div className="flex items-center  justify-center">
                <h2 className="md:text-xl sm:text-[16px] text-[13px] md:mb-3 mb-2 me-2">
                  Payment Partners
                </h2>
                <div className="flex items-center md:gap-4 gap-2 md:ms-5 ms-2">
                  <Image
                    src={amazon}
                    alt="Amazon Pay Logo"
                    className="sm:w-15 w-10"
                  />
                  <Image
                    src={americaex}
                    alt="American Express Logo"
                    className="sm:w-15 w-10"
                  />
                  <Image
                    src={mastercardlogo}
                    alt="Mastercard Logo"
                    className="sm:w-15 w-10"
                  />
                  <Image
                    src={paypal}
                    alt="PayPal Logo"
                    className="sm:w-15 w-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <p className="md:text-lg sm:text-[16px] text-[12px] ">
                  Get deliveries with FreshCart
                </p>
                <div className="flex ">
                  <Image
                    src={appstore}
                    alt="App Store Logo"
                    className="md:w-36 sm:w-28 w-20 relative start-[15px]"
                  />
                  <Image
                    src={googleplay}
                    alt="Google Play Logo"
                    className="md:w-40 sm:w-30 w-23  "
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>

      )}
    </>
  );
};

export default Footer;
