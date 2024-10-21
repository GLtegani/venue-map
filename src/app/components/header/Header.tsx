"use client";

import { pragati_narrow } from "../../styles/fonts/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";
import { useState } from "react";
import NavBarLink from "./NavBarLink";
import Logo from "../Logo";

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
          <Logo withBg />
        </NavbarBrand>

        <div className="flex items-center justify-center gap-7">
          <NavBarLink
            type="header"
            screenType="large"
            path="/"
            linkText="Home"
          />
          <NavBarLink
            type="header"
            screenType="large"
            path="/about"
            linkText="Conheça o Prédio"
          />
          <NavBarLink
            type="header"
            screenType="large"
            path="/contact"
            linkText="Entre em Contato"
          />
          <NavBarLink
            type="header"
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
          <NavBarLink
            type="header"
            screenType="small"
            path="/"
            linkText="Home"
          />
          <NavBarLink
            type="header"
            screenType="small"
            path="/about"
            linkText="Conheça o Prédio"
          />
          <NavBarLink
            type="header"
            screenType="small"
            path="/contact"
            linkText="Entre em Contato"
          />

          <NavBarLink
            type="header"
            screenType="small"
            path="/register"
            linkText="Cadastrar"
          />
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
