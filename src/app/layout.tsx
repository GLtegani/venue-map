import type { Metadata } from "next";
import "./styles/globals.css";
import { Provider } from "./components/Provider";
import Header from "./components/header/Header";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Footer from "./components/footer/Footer";

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
    <html className="scroll-smooth" lang="pt-br">
      <body>
        <Provider>
          <ScrollShadow>
            <Header />
            {children}
            <Footer />
          </ScrollShadow>
        </Provider>
      </body>
    </html>
  );
}
