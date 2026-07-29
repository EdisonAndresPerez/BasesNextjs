import {
  AccessibilityIcon,
  CreditCardIcon,
  HomeIcon,
  PeopleIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-links/ActiveLink";

const navbarLinks = [
  { path: "/about", text: "About", icon: <AccessibilityIcon className="mr-2" /> },
  { path: "/contact", text: "Contact", icon: <PeopleIcon className="mr-2" /> },
  { path: "/pricing", text: "Pricing", icon: <CreditCardIcon className="mr-2" /> },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center text-white hover:text-gray-300">
        <HomeIcon className="mr-2" />
        Home
      </Link>

      <ul className="flex items-center gap-4">
        {navbarLinks.map((navLink) => (
          <ActiveLink key={navLink.path} {...navLink} />
          // <ActiveLink key={navLink.path} path={navLink.path} text={navLink.text} icon={navLink.icon} />
        ))}

        {/* 
        <li>
          <Link href="/about" className="text-white hover:text-gray-300 flex items-center">
          <AccessibilityIcon className="mr-2"/>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300 flex items-center">
          <PeopleIcon className="mr-2"/>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-white hover:text-gray-300 flex items-center">
          <CreditCardIcon className="mr-2"/>
            Pricing
          </Link>
        </li> 
        */}
      </ul>
    </nav>
  );
};
