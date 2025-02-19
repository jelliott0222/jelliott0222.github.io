import { Geist, Geist_Mono, Grandstander, Roboto_Slab } from "next/font/google";
import "./globals.css";
import "./styles/style.scss";
// import Link from "next/link";
// import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Mountain Fried Chicken Hickory",
  description: "Mountain Fried Chicken Hickory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
