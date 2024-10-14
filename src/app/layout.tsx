import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { List } from "@phosphor-icons/react/dist/ssr";
import { archivo_narrow, pragati_narrow } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Venue Map",
  description: "A focused guide for commercial buildings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className={`${pragati_narrow.className} p-3`}>
          <nav>
            <ul className="flex items-center justify-between gap-4">
              <li>
                {/* Logo */}
                <Link href={"/"} className="text-3xl">
                  LOGO
                </Link>
              </li>

              <li className="hidden 2sm:block text-lg">
                <Link href={"/"}>Home</Link>
              </li>

              <li>
                <Link href={"/about"} className="hidden 2sm:block text-lg">
                  Conheça o Prédio
                </Link>
              </li>

              <li>
                <Link href={"/contact"} className="hidden 2sm:block text-lg">
                  Entre em Contato
                </Link>
              </li>

              <li className="2sm:hidden">
                <button className="text-3xl">
                  <List />
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
