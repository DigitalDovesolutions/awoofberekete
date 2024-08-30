"use client"

import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUserCircle } from "react-icons/pi";
import { GiHamburger } from "react-icons/gi";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideNav from "./SideNav";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const icons = [
  { name: "Search", icon: TbSearch, className: "text-[23px] cursor-pointer" },
  { name: "Favourite", icon: FaRegHeart, className: "text-[23px] cursor-pointer" },
  { name: "Cart", icon: MdOutlineShoppingCart, className: "text-[23px] cursor-pointer" },
  { name: "User", icon: PiUserCircle, className: "text-[23px] cursor-pointer" },
];

const Navbar = () => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative ${isOpen ? "z-30" : "z-20"} p-[5px_0] bg-transparent max-[991px]:bg-transparent`}>
      <div className="container">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <Logo width={135} height={110} />

          {/* Menu Items */}
          <ul className="max-[991px]:hidden flex justify-between items-center gap-16 max-md:gap-10 lg:gap-18">
            {menuItems.map(({ name, href }) => (
              <li key={name} className="relative">
                <Link href={href} className={`nav-link ${currentPath === href ? "text-danger show" : "text-primary hover:text-danger transition-colors duration-700"} `} >{name}</Link>
              </li>
            ))}
          </ul>

          {/* Icons Section */}
          <div className="flex items-center">
            <ul className="max-sm:hidden flex justify-end items-center gap-6 text-primary">
              {icons.map(({ name, icon: Icon, className }) => (
                <li key={name} className="hover:text-danger transition-all duration-0">
                  <Icon className={className} />
                </li>
              ))}
            </ul>

            {/* Menu Button for Mobile */}
            <button className="ml-8 min-[991px]:hidden" onClick={() => setIsOpen(true)}>
              <GiHamburger className="text-black text-[2.2rem] transition-colors duration-0 ease-linear hover:text-danger" />
            </button>
          </div>
        </div>
      </div>

      <div className={`absolute min-[991px]:hidden top-0 h-screen w-screen transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 z-[1]" : "-z-20 opacity-0"}`}>
        <SideNav isOpen={() => setIsOpen(false)} active={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
