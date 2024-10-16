import type { Metadata } from "next";
import "./styles/globals.css";
import { Provider } from "./components/Provider";
import Header from "./components/Header";

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
      <body className="bg-chronos bg-no-repeat bg-cover h-screen bg-center">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
