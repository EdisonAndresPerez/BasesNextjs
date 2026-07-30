"use client";

import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  icon: React.ReactNode;
}

export const ActiveLink = ({ path, text, icon }: Props) => {
  //hook propio de nextjs
  const pathName = usePathname();

  return (
    <>
      <Link
        href={path}
        className={`text-white hover:text-gray-300 flex items-center ${style.link}   
          ${pathName === path ? style["active-link"] : ""}`}
      >
        {icon}
        {text}
      </Link>
    </>
  );
};
