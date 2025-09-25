"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import navbarLogo from "./../../../../public/assets/freshcart-logo.svg";
import Link from "next/link";
import { NavLink, LinksNavbar } from "../NavLink/NavLink";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { CartContext } from "@/Context/CartContext";

const Navbar = () => {
  const { data: session, status } = useSession();
  const { numOfCartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const path = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/Cart" },
    { name: "Wish List", href: "/WishList" },
    { name: "Products", href: "/Products" },
    { name: "Categories", href: "/Categories" },
    { name: "Brands", href: "/Brands" },
  ];

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut({ callbackUrl: "/Signin" });
  };

  return (
    <div className="navbar bg-white shadow-sm px-0  fixed top-0 left-0 right-0 z-10">
      <div className="flex w-[90%] mx-auto md:px-4">
        {/* Left Section */}
        <div className="flex items-center justify-between w-[90%] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              {status === "loading" ? (
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-300" />
              ) : (
                <Image
                  src={navbarLogo}
                  alt="Logo-Navbar"
                  className="cursor-pointer w-35 md:w-full"
                />
              )}
            </Link>

            <div className="hidden xl:flex">
              <ul className="menu-horizontal ms-5 px-1 flex-row xl:gap-4 md:gap-2">
                {status === "authenticated" && (
                  <>
                    {path.map((link, index) => (
                      <li key={index}>
                        <LinksNavbar
                          href={link.href}
                          linkname={link.name}
                          pathname={pathname}
                        />
                      </li>
                    ))}
                  </>
                )}

                {status === "loading" && (
                  <>
                    {path.map((link, index) => (
                      <li key={index}>
                        <Skeleton className="h-[30px] w-[40px] rounded-md bg-gray-300" />
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Hamburger Button for Mobile */}

          {status === "authenticated" && (
            <>
              <div className="xl:hidden flex items-center gap-4  transition-all duration-300">
                <div>
                  <p className=" xl:flex bg-amber-300 md:text-[14px] text-[10px] md:p-2 py-[5px] px-[10px] rounded-md font-semibold gap-1">
                    <span>Welcome,</span> {session?.user?.name.split(" ")[0]}
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer text-gray-600 border-3 border-gray-600 rounded-md md:px-2 md:py-1 py-[3px] px-[6px] transition-all duration-300 hover:scale-90 hover:border-gray-950"
                >
                  <i className="fa-solid fa-bars md:text-md text-[15px] hover:text-black active:text-black"></i>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="xl:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-3">
            <ul className="flex items-center gap-2">
              <li>
                <i className="fa-brands fa-instagram cursor-pointer fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook cursor-pointer fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok cursor-pointer fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter cursor-pointer fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin cursor-pointer fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube cursor-pointer fa-lg"></i>
              </li>
            </ul>
          </div>

          <div className="hidden xl:flex mt-2">
            {status === "authenticated" && (
              <Link href="/Cart">
                <button className="cursor-pointer">
                  <i className="fa-solid fa-cart-shopping text-2xl text-gray-600 hover:text-black active:text-black transition-all duration-300 relative">
                    <Badge className="absolute -top-4 left-4 bg-[#4FA74F]">
                      <div className="text-[14px]">{numOfCartItems}</div>
                    </Badge>
                  </i>
                </button>
              </Link>
            )}
          </div>

          <div className="flex items-center md:gap-5 gap-2 ms-3">
            {status === "authenticated" && (
              <>
                <button
                  className="hidden xl:flex md:text-lg text-gray-500 hover:text-black active:text-black cursor-pointer font-semibold"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>

                <div>
                  <p className="hidden xl:flex bg-amber-300 text-[14px] p-2 rounded-md font-semibold gap-1">
                    <span>Welcome,</span> {session?.user?.name.split(" ")[0]}
                  </p>
                </div>
              </>
            )}

            {status === "unauthenticated" && (
              <>
                <button className="md:text-lg text-gray-500 hover:text-black active:text-black cursor-pointer font-semibold">
                  <Link href="/Register">Register</Link>
                </button>
                <button className="md:text-lg text-gray-500 hover:text-black active:text-black cursor-pointer font-semibold">
                  <Link href="/Signin">Signin</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute top-16 left-0 bg-white shadow-lg p-4 xl:hidden z-50
          transition-all duration-500 ease-in-out w-full 
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <div className="w-[90%] mx-auto">
          <ul className="flex flex-col gap-4">
            {path.map((item, index) => (
              <li key={index}>
                <NavLink
                  hrefPath={item.href}
                  setIsOpen={setIsOpen}
                  name={item.name}
                  pathname={pathname}
                />
              </li>
            ))}

            <div className="mx-auto py-3">
              <ul className="flex items-center gap-2">
                <li>
                  <i className="fa-brands fa-instagram cursor-pointer fa-lg"></i>
                </li>
                <li>
                  <i className="fa-brands fa-facebook cursor-pointer fa-lg"></i>
                </li>
                <li>
                  <i className="fa-brands fa-tiktok cursor-pointer fa-lg"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter cursor-pointer fa-lg"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin cursor-pointer fa-lg"></i>
                </li>
                <li>
                  <i className="fa-brands fa-youtube cursor-pointer fa-lg"></i>
                </li>
              </ul>
            </div>

            <li className="mx-auto">
              <Link href="/Cart">
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-cart-shopping text-2xl text-gray-600 hover:text-black active:text-black transition-all duration-300 relative">
                    <Badge className="absolute -top-4 left-4 bg-[#4FA74F]">
                      <div className="text-[14px]">{numOfCartItems}</div>
                    </Badge>
                  </i>
                </button>
              </Link>
            </li>

            <li className="mx-auto">
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full py-2 text-center md:text-lg text-gray-500 hover:text-black active:text-black cursor-pointer font-semibold border-t border-gray-200 mt-2"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
