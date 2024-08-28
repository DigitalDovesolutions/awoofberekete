"use client"
import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUserCircle } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Menu", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const icons = [
  { name: "Search", icon: TbSearch, className: "text-[23px]" },
  { name: "Favourite", icon: FaRegHeart, className: "text-[23px]" },
  { name: "Cart", icon: MdOutlineShoppingCart, className: "text-[23px]" },
  { name: "User", icon: PiUserCircle, className: "text-[23px]" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="relative p-[13px_0] bg-transparent max-[991px]:bg-transparent">
      <div className="container">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" className="logo">
            <Logo />
          </Link>

          {/* Menu Items */}
          <ul className="max-[991px]:hidden flex justify-between items-center gap-16 max-md:gap-10 lg:gap-24">
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className={currentPath === href ? "text-danger" : "text-primary" } >{name}</Link>
              </li>
            ))}
          </ul>

          {/* Icons Section */}
          <div className="flex items-center">
            <ul className="flex justify-end items-center gap-6 text-primary">
              {icons.map(({ name, icon: Icon, className }) => (
                <li key={name}>
                  <Icon className={className} />
                </li>
              ))}
            </ul>

            {/* Menu Button for Mobile */}
            <button className="ml-8 min-[991px]:hidden">
              <IoMenu className="text-black text-[2.8rem]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
