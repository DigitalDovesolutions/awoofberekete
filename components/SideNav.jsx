
import { GiKnifeFork } from "react-icons/gi";
import Logo from "./Logo";
import Link from "next/link";


const menuItems = [
    { name: "My Profile", href: "/profile" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Locate us", href: "/location" },
];

const SideNav = ({ isOpen, active }) => {
    return (
      <div
        className={`main-sidebar absolute top-0 h-screen w-screen bg-black transition-opacity duration-300 ease-linear ${
          active ? "bg-opacity-50" : "bg-opacity-100"
        }`}
      >

        <div className="sidebar-wrapper relative h-full w-full">
          <div
            className={`sidebar-content flex flex-col overflow-y-auto bg-white h-screen absolute right-0 w-4/5 md:w-1/2 lg:w-1/3 shadow-lg transition-transform duration-300 ease-in-out transform ${
              active ? "translate-x-0" : "translate-x-full"
            }`}
          >

            {/* Sidebar Header: Start aligned */}
            <div className="sidebar-header p-4 mb-10 flex justify-start">
              <button
                className="text-2xl font-bold text-gray-800 transition-colors duration-0 ease-linear hover:text-danger focus:outline-none outline-none"
                onClick={isOpen}
              >
                <GiKnifeFork/>
              </button>
            </div>

            {/* Sidebar Body: Center aligned */}
            <div className="sidebar-body p-4 flex-grow flex flex-col justify-start">
                <ul className="flex flex-col justify-center items-start">
                    {menuItems.map(({name, href}) => (
                        <li key={name} className="text-lg font-bold pb-7 mb-7 text-gray-800 hover:text-danger w-full border-b-2 border-secondary">
                            <Link href={href}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sidebar Footer: End aligned */}
            <div className="sidebar-footer p-4">
              <div className="flex justify-between items-end">
                <div className="logo-wrapper">
                    <Logo width={100} height={100}/>
                </div>

                <div>
                    <p className="font-semibold">...the taste of savory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideNav;
  