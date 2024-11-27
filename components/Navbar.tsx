"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import HamburgerMenu from "./HamburgerMenu";
import { AnimatePresence, motion as m } from "motion/react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (currentItem: number | null) => {
    if (typeof currentItem == "number" && typeof currentItem == "number") {
      setDir(currentItem > currentItem ? "l" : "r");
    }
    setCurrentItem(currentItem);
    console.log(currentItem);
  };

  return (
    <div onMouseLeave={() => handleSetSelected(null)}>
      <div className={`flex items-center justify-between px-4 `}>
        <Link
          href="/"
          className="relative flex items-center justify-between py-4"
        >
          <div className={`font-poppins text-2xl`}>Giovanni</div>
        </Link>
        <div className="relative items-center hidden gap-4 p-6 border-2 dark:border-primary border-[#aaff80] rounded-full font-poppins  md:flex">
          {NAVITEMS.map((item) => (
            <NavbarItem
              key={item.id}
              itemName={item.name}
              itemId={item.id}
              handleSetCurrentItem={handleSetSelected}
            />
          ))}
          <AnimatePresence>
            {currentItem && (
              <NavItemContentContainer selected={currentItem} dir={dir}>
                {NAVITEMS.map((item) => {
                  return (
                    <m.div key={item.id}>
                      {item.id == currentItem ? item.component : ""}
                    </m.div>
                  );
                })}
              </NavItemContentContainer>
            )}
          </AnimatePresence>
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

const NavItemContentContainer = ({
  selected,
  dir,
  children,
}: {
  selected: number | null;
  dir: "l" | "r" | null;
  children: React.ReactNode;
}) => {
  return (
    <m.div
      initial={{
        y: 8,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 8,
        opacity: 0,
      }}
      className="h-24 w-full top-[calc(100%+24px)] border-2 dark:border-primary rounded-lg left-0 
      border-[#aaff80]
      dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 absolute p-4"
    >
      <div className="absolute -top-24 left-0 h-24 w-full"></div>
      {children}
    </m.div>
  );
};

const NavItemContent = () => {
  return <div>Hello, content</div>;
};

const NAVITEMS = [
  {
    name: "About me",
    component: <NavItemContent />,
  },
  {
    name: "Favourite music",
    component: <NavItemContent />,
  },
  {
    name: "Goals",
    component: <NavItemContent />,
  },
  {
    name: "Quotes",
    component: <NavItemContent />,
  },
  {
    name: "Inspiration",
    component: <NavItemContent />,
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

export default Navbar;
