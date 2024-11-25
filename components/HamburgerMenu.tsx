"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type HamburgerMenuProps = {
  className: string;
  mobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu = ({
  className,
  mobileMenu,
  setShowMobileMenu,
}: HamburgerMenuProps) => {
  return (
    <div
      onClick={() => setShowMobileMenu((prev) => !prev)}
      className={twMerge(
        "flex flex-col items-start w-10 gap-1 cursor-pointer group",
        className
      )}
    >
      <div className="w-3 transition-all duration-400 ease group-hover:w-6 h-[2px] bg-primary"></div>
      <div className="w-4 transition-all duration-400 ease group-hover:w-6 h-[2px] bg-primary"></div>
      <div className="w-5 transition-all duration-400 ease group-hover:w-6 h-[2px] bg-primary"></div>
    </div>
  );
};

export default HamburgerMenu;
