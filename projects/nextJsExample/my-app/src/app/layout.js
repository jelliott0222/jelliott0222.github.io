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
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Atma:wght@300;400;500;600;700&family=Bubblegum+Sans&family=Chicle&family=Grandstander:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&family=Roboto+Slab:wght@100..900&family=Wendy+One&display=swap" />
      </Head> */}
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
