import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/sharePage/Navbar";
import Footer from "@/components/sharePage/Footer";


const Pacifico = localFont({
  src: "./fonts/Pacifico-Regular.ttf",
  variable: "--font-pacifico",
  weight: "100 900",
});
const Manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-Manrope",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${Manrope.variable}  ${Pacifico.variable} antialiased`}
      >
          <Navbar></Navbar>
         
            {children}
            <Footer></Footer>
      </body>
    </html>
  );
}
