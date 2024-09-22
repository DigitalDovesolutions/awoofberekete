// app/layout.js or app/layout.tsx
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Awoofberekete - Restaurant",
    template: "Awoofberekete | %s",
  },
  description: "Awoofberekete website",
  icons: {
    icon: "/assets/images/Logo/cropped-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background selection:bg-danger selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}