import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/Logo/cropped-logo.png"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title.default}</title>
      </head>
      <body className="bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
