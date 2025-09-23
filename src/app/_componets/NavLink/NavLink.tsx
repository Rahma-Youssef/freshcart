import Link from "next/link";
import React from "react";

interface NavLinkProps {
  hrefPath: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  pathname: string;
}

const NavLink = ({ hrefPath, setIsOpen, name, pathname }: NavLinkProps) => {
  return (
    <div>
      {" "}
      <Link
        href={hrefPath}
        className={`${
          pathname === hrefPath ? "text-green-600 font-semibold" : "text-gray-700"
        }  hover:text-green-600 active:text-green-600`}
        onClick={() => setIsOpen(false)}
      >
        {name}
      </Link>
    </div>
  );
};

const LinksNavbar = ({
  href,
  linkname,
  pathname,
}: {
  href: string;
  linkname: string;
  pathname: string;
}) => {
  return (
    <>
      <Link
        href={href}
        className={` hover:text-green-600 active:text-green-600
        ${pathname === href ? "text-green-600 font-semibold" : "text-gray-700 font-[500]"} 
           `}
      >
        {linkname}
      </Link>
    </>
  );
};

export { LinksNavbar, NavLink };
