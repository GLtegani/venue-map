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
        className="p-3"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link
              href={"/"}
              className={`flex items-center justify-center text-base md:text-xl gap-1 ${kite_one.className}`}
            >
              <Image
                width={76}
                height={76}
                alt="NextUI hero Image"
                src="/logotype-venue-map.png"
              />
              Venue Map
            </Link>
          </NavbarBrand>

          <NavbarItem
            className={`hidden sm:block ${
              pathname === "/" ? "text-cyan-800" : "text-black"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/"}>
              Home
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden sm:block ${
              pathname === "/about" ? "text-cyan-800" : "text-black"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/about"}>
              Conheça o Prédio
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden sm:block mr-4 ${
              pathname === "/contact" ? "text-cyan-800" : "text-black"
            }`}
          >
            <Link className="text-base md:text-xl" href={"/contact"}>
              Entre em Contato
            </Link>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarMenu className="pt-7">
            <NavbarMenuItem
              className={`${pathname === "/" ? "text-cyan-800" : "text-black"}`}
            >
              <Link className="w-full text-xl" href={"/"}>
                Home
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/about" ? "text-cyan-800" : "text-black"
              }`}
            >
              <Link className="w-full text-xl" href={"/about"}>
                Conheça o Prédio
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/contact" ? "text-cyan-800" : "text-black"
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
