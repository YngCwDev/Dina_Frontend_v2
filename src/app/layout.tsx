import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({weight:'variable', subsets:['latin'], variable:'--font-dm_sans'})

export const metadata: Metadata = {
  title: "Dina Holding | SA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} antialiased overflow-hidden`}
      >

        {children}
      </body>
    </html>
  );
}
