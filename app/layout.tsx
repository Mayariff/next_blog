import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header, Providers } from "@/components";
import s from "./page.module.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Learning Next.js"
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={roboto.className}>
    <Providers>
      <Header />
      <main className={s.container}>
        {children}
      </main>
      <Footer /></Providers>
    </body>
    </html>
  );
}
