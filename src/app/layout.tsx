import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";


// Load Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Symbiotik Site",
  description: "Harnessing Sustainable Energy with Portable Solar Inverters, Automatic Changeover Switches, and Advanced Automation Devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NavBar/>
       
        {children}
        <Footer/>
      </body>
    </html>
  );
}
