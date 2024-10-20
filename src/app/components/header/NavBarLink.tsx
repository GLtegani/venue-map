import { NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarLinkProps {
  screenType: "small" | "large";
  path: "/" | "/about" | "/contact" | "/register";
  linkText: string;
}

export default function NavBarLink({
  path,
  linkText,
  screenType,
}: NavBarLinkProps) {
  const pathname = usePathname();
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
}
