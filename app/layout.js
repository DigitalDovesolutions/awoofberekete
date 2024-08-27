import { Inter } from "next/font/google";
import { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Awoofberekete - Resturant", // Default title for all until a page title Metadata is changed
    template: " Coffee WorkDo | %s ", // For dynamic titles OR reuseable component
  },
  description: "Coffee WorkDo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
