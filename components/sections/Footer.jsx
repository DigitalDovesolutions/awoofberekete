"use client";

import { FiPhoneCall } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname for Server Components
import Image from "next/image";
import Logo from "../Logo";

import visa from "@/public/assets/images/Payment-cards/payment1.png";
import amex from "@/public/assets/images/Payment-cards/payment2.png";
import discover from "@/public/assets/images/Payment-cards/payment3.png";
import Mcard from "@/public/assets/images/Payment-cards/payment4.png";

const Footer = () => {
  const currentPath = usePathname();

  const paymentMethods = [
    { href: visa, name: "Visa" },
    { href: amex, name: "American Express" },
    { href: discover, name: "Discover card" },
    { href: Mcard, name: "Mastercard" },
  ];

  const footerLinks = [
    {
      title: "Support Links",
      links: [
        { to: "/about", label: "About" },
        { to: "/faq", label: "FAQ's" },
        { to: "/contact", label: "Contact Us" },
        { to: "/news", label: "News" },
        { to: "/location", label: "Store Location" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { to: "/payment-policy", label: "Payment Policy" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/return-policy", label: "Return Policy" },
        { to: "/shipping-policy", label: "Shipping Policy" },
        { to: "/terms-conditions", label: "Terms & Conditions" },
      ],
    },
    {
      title: "My Account",
      links: [
        { to: "/my-account", label: "My Account" },
        { to: "/my-cart", label: "My Cart" },
        { to: "/order-history", label: "Order History" },
        { to: "/my-wishList", label: "My WishList" },
        { to: "/my-address", label: "My Address" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* CONTACT US */}
          <div>
            <Logo className="mb-4" width={100} height={100}/>
            <ul className="space-y-2">
              <li className="flex items-center">
                <LiaMapMarkerAltSolid className="mr-2" />
                <a href="#" target="_blank">
                  Wooster Park, Chowk Bazaar, New York
                </a>
              </li>

              <li className="flex items-center">
                <FiPhoneCall className="mr-2" />
                <a href="tel:+123400000000">+123 000 000 0000</a>
              </li>
              
              <li className="flex items-center">
                <MdOutlineEmail className="mr-2" />
                <a href="mailto:gmail@gmail.com">gmail@gmail.com</a>
              </li>
            </ul>

            {/* PAYMENT METHODS */}
            <div className="flex space-x-4 mt-4">
              {paymentMethods.map((method) => (
                <Image
                  src={method.href}
                  height={100}
                  width={40}
                  loading="lazy"
                  key={method.name}
                  alt={method.name}
                  className="hover:text-gray-400"
                />
              ))}
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="footer-title text-lg font-semibold capitalize mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.to}
                      className={
                        currentPath === link.to
                          ? "text-yellow-400"
                          : "hover:text-gray-400"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
