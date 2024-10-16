"use client";

import { Image } from "@nextui-org/image";
import { pragati_narrow } from "../styles/fonts/fonts";
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
          <NavbarBrand className="mr-2">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                alt="NextUI hero Image"
                src="/rounded-in-photoretrica.jpg"
                className="w-16 h-16"
              />
            </Link>
          </NavbarBrand>

          <NavbarItem
            className={`hidden 2sm:block ${
              pathname === "/" ? "text-orange-600" : "text-black"
            }`}
          >
            <Link className="text-xl md:text-2xl" href={"/"}>
              Home
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden 2sm:block ${
              pathname === "/about" ? "text-orange-600" : "text-black"
            }`}
          >
            <Link className="text-xl md:text-2xl" href={"/about"}>
              Conheça o Prédio
            </Link>
          </NavbarItem>

          <NavbarItem
            className={`hidden 2sm:block mr-4 ${
              pathname === "/contact" ? "text-orange-600" : "text-black"
            }`}
          >
            <Link className="text-xl md:text-2xl" href={"/contact"}>
              Entre em Contato
            </Link>
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="2sm:hidden"
          />

          <NavbarMenu className="pt-7">
            <NavbarMenuItem
              className={`${
                pathname === "/" ? "text-orange-600" : "text-black"
              }`}
            >
              <Link className="w-full text-xl" href={"/"}>
                Home
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/about" ? "text-orange-600" : "text-black"
              }`}
            >
              <Link className="w-full text-xl" href={"/about"}>
                Conheça o Prédio
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem
              className={`${
                pathname === "/contact" ? "text-orange-600" : "text-black"
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
