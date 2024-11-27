"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type NavbarItemProps = {
  itemName: string;
  className?: string;
  handleSetCurrentItem: (currentItem: number | null) => void;
  itemId: number | null;
};

const NavbarItem = ({
  itemName,
  className,
  handleSetCurrentItem,
  itemId,
}: NavbarItemProps) => {
  return (
    <div>
      <button
        className={twMerge("peer font-poppins", className)}
        onMouseEnter={() => handleSetCurrentItem(itemId)}
      >
        {itemName}
      </button>
      <div className="w-full h-[0.5px] bg-foreground opacity-0 peer-hover:opacity-100 transition-opacity ease-in-out duration-500 " />
    </div>
  );
};

export default NavbarItem;
