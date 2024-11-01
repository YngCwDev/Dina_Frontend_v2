import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ['latin'], weight:'900' });

export const metadata: Metadata = {
  title: "Dina Holding | SA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-hero bg-no-repeat bg-cover bg-fixed -z-10 antialiased  transition-opacity   duration-300 ease-linear ${poppins}`}
      >
        <Navbar />
        <main className="min-h-[100vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
