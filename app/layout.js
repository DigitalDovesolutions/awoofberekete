import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Awoofberekete - Restaurant",
    template: "Awoofberekete | %s",
  },
  description: "Awoofberekete website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/Logo/cropped-logo.png"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title.default}</title>
      </Head>
      <body className="bg-background selection:bg-danger selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
