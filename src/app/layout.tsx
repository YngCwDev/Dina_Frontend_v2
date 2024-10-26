import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dina Holding | SA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body
        className={`bg-hero bg-no-repeat bg-cover bg-fixed -z-10 antialiased  transition-opacity   duration-300 ease-linear`}
      >
          <Navbar />
           {children}
          <Footer />

      </body>
    </html>
  );
}