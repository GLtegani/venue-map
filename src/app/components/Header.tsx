"use client";

import Image from "next/image";
import { pragati_narrow, kite_one } from "../styles/fonts/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`${pragati_narrow.className}`}>
      <Navbar
        shouldHideOnScroll
        isBordered
        onMenuOpenChange={setIsMenuOpen}
        className="py-3"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link
              href={"/"}
              className={`flex text-white items-center justify-center text-base 
                md:text-xl gap-1 ${kite_one.className}`}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <Image
                  width={76}
                  height={76}
                  alt="NextUI hero Image"
                  src="/logotype-venue-map.png"
                />
              </div>
              Venue Map
            </Link>
          </NavbarBrand>

          <NavbarItem
            className={`hidden sm:block ${
              pathname === "/" ? "text-cyan-400" : "text-white"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/"}>
              Home
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden sm:block ${
              pathname === "/about" ? "text-cyan-400" : "text-white"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/about"}>
              Conheça o Prédio
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden sm:block mr-4 ${
              pathname === "/contact" ? "text-cyan-400" : "text-white"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/contact"}>
              Entre em Contato
            </Link>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />

          <NavbarMenu className="pt-7">
            <NavbarMenuItem
              className={`${pathname === "/" ? "text-cyan-400" : "text-white"}`}
            >
              <Link className="w-full text-xl" href={"/"}>
                Home
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/about" ? "text-cyan-400" : "text-white"
              }`}
            >
              <Link className="w-full text-xl" href={"/about"}>
                Conheça o Prédio
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/contact" ? "text-cyan-400" : "text-white"
              }`}
            >
              <Link className="w-full text-xl" href={"/contact"}>
                Entre em Contato
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
