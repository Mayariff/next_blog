import "./globals.css";
import type { Metadata } from "next";
import { Roboto,Inter } from 'next/font/google'
import { Footer, Header } from "@/components";
import s from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
    <Header />
    <main className={s.container}>
      {children}
    </main>
    <Footer />
    </body>
    </html>
  );
}
