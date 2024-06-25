import type { Metadata } from "next";
import {Inter, Wellfleet, Poppins} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });
// @ts-ignore
const wellfleet = Wellfleet({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });


export const metadata: Metadata = {
  title: "frontend-ui-project",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}><Navbar/>{children}</body>
    </html>
  );
}
