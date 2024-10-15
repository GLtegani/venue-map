import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { List } from "@phosphor-icons/react/dist/ssr";
import { pragati_narrow } from "./fonts/fonts";
import { Providers } from "./providers";

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
        <Providers>
          <header className={`${pragati_narrow.className} p-3`}>
            <nav>
              <ul className="flex items-center justify-between gap-4">
                <li>
                  {/* Logo */}
                  <Link href={"/"} className="text-3xl">
                    LOGO
                  </Link>
                </li>

                <li className="hidden 2sm:block text-lg sm:text-xl md:text-2xl">
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link
                    href={"/about"}
                    className="hidden 2sm:block text-lg sm:text-xl md:text-2xl"
                  >
                    Conheça o Prédio
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="hidden 2sm:block text-lg sm:text-xl md:text-2xl 
                  ls:pr-4 sm:pr-6 lg:pr-12"
                  >
                    Entre em Contato
                  </Link>
                </li>

                <li className="2sm:hidden">
                  <button className="text-4xl">
                    <List />
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
