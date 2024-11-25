import React from "react";
import { twMerge } from "tailwind-merge";

type NavbarItemProps = {
  itemName: string;
  className?: string;
};

const NavbarItem = ({ itemName, className }: NavbarItemProps) => {
  return (
    <div className={twMerge("flex flex-col gap-[0.5px]", className)}>
      <button className="peer font-poppins">{itemName}</button>
      <div className="w-full h-[0.5px] bg-foreground opacity-0 peer-hover:opacity-100 transition-opacity ease-in-out duration-500 "></div>
    </div>
  );
};

export default NavbarItem;
