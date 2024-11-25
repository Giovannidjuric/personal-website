"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import HamburgerMenu from "./HamburgerMenu";
import { AnimatePresence, motion as m } from "motion/react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={`flex items-center justify-between px-4 mt-10`}>
        <Link
          href="/"
          className="relative flex items-center justify-between py-4"
        >
          <div className={`font-poppins text-2xl`}>Giovanni</div>
        </Link>
        <div className="relative items-center hidden gap-4 p-6 border-2 rounded-full font-poppins border-primary md:flex">
          <NavbarItem itemName="About me" />
          <NavbarItem itemName="My favourite music"></NavbarItem>
          <NavbarItem itemName="Goals"></NavbarItem>
          <NavbarItem itemName="Quotes"></NavbarItem>
          <NavbarItem itemName="Inspiration"></NavbarItem>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <HamburgerMenu
            className="md:hidden"
            mobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>
      </div>
      <>
        <AnimatePresence>
          {showMobileMenu && (
            <m.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute z-10 flex flex-col items-center justify-center w-screen h-[calc(100vh-100px)] top-[104px] gap-5 text-2xl bg-background"
            >
              <NavbarItem
                className="tracking-tight uppercase"
                itemName="About me"
              />
              <NavbarItem
                className="tracking-tight uppercase"
                itemName="My favourite music"
              ></NavbarItem>
              <NavbarItem
                className="tracking-tight uppercase"
                itemName="Goals"
              ></NavbarItem>
              <NavbarItem
                className="tracking-tight uppercase"
                itemName="Quotes"
              ></NavbarItem>
              <NavbarItem
                className="tracking-tight uppercase"
                itemName="Inspiration"
              ></NavbarItem>
            </m.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default Navbar;
