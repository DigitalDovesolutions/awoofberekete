import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Awoofberekete - Resturant", // Default title for all until a page title Metadata is changed
    template: " Awoofberekete | %s ", // For dynamic titles OR reusable component
  },
  description: "Awoofberekete website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/Logo/cropped-logo.png"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title.default}</title>
      </head>
      <body className="bg-background selection:bg-danger selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
