"use client";

import { NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarLinkProps {
  type: "header" | "footer";
  screenType: "small" | "large";
  path: "/" | "/about" | "/contact" | "/register";
  linkText: string;
}

export default function NavBarLink({
  type,
  path,
  linkText,
  screenType,
}: NavBarLinkProps) {
  const pathname = usePathname();
  if (type == "header") {
    if (screenType == "large") {
      return (
        <NavbarItem
          className={`hidden sm:block ${
            pathname === path ? "text-cyan-400" : "text-white"
          } hover:text-cyan-400 transition`}
        >
          <Link className="text-base md:text-2xl" href={path}>
            {linkText}
          </Link>
        </NavbarItem>
      );
    } else {
      return (
        <NavbarMenuItem
          className={`${pathname === path ? "text-cyan-400" : "text-white"}
                  hover:text-cyan-400 transition`}
        >
          <Link className="w-full text-xl" href={path}>
            {linkText}
          </Link>
        </NavbarMenuItem>
      );
    }
  } else {
    return (
      <Link
        className={`w-full text-lg 2sm:text-xl md:text-2xl hover:text-cyan-400 text-black 
          transition
        `}
        href={path}
      >
        {linkText}
      </Link>
    );
  }
}
