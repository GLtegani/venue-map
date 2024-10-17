import type { Metadata } from "next";
import "./styles/globals.css";
import { Provider } from "./components/Provider";

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
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
