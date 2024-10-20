"use client";

import Image from "next/image";
import { pragati_narrow, kite_one } from "../../styles/fonts/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import NavBarLink from "./NavBarLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className={`${pragati_narrow.className} bg-black bg-opacity-70 fixed top-0 left-0 w-full`}
      height={"4.5rem"}
      isBordered
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href={"/"}
            className={`flex text-white items-center justify-center text-base 
                md:text-xl 2md:text-2xl gap-1 ${kite_one.className}`}
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

        <div className="flex items-center justify-center gap-7">
          <NavBarLink screenType="large" path="/" linkText="Home" />
          <NavBarLink
            screenType="large"
            path="/about"
            linkText="Conheça o Prédio"
          />
          <NavBarLink
            screenType="large"
            path="/contact"
            linkText="Entre em Contato"
          />
          <NavBarLink
            screenType="large"
            path="/register"
            linkText="Cadastrar"
          />
        </div>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />

        <NavbarMenu>
          <NavBarLink screenType="small" path="/" linkText="Home" />
          <NavBarLink
            screenType="small"
            path="/about"
            linkText="Conheça o Prédio"
          />
          <NavBarLink
            screenType="small"
            path="/contact"
            linkText="Entre em Contato"
          />

          <NavBarLink
            screenType="small"
            path="/register"
            linkText="Cadastrar"
          />
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
