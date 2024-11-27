"use client";

import React from "react";
import { motion } from "motion/react";

type RevealLinksContentProps = {
  children: string;
};

const RevealLinks = () => {
  return <RevealLinksContent>Welcome</RevealLinksContent>;
};

const RevealLinksContent = ({ children }: RevealLinksContentProps) => {
  return (
    <motion.div
      className="relative block mx-auto overflow-hidden uppercase text-primary sm:text-4xl md:text-6xl lg:text-8xl"
      initial="initial"
      whileHover="hovered"
    >
      {children.split("").map((l, i) => (
        <motion.span
          variants={{
            initial: {
              y: 0,
            },
            hovered: {
              y: "100%",
            },
          }}
          transition={{
            delay: 0.025 * i,
            duration: 0.25,
            ease: "easeInOut",
          }}
          key={i}
          className="inline-block font-poppins"
        >
          {l}
        </motion.span>
      ))}
      <div className="absolute bottom-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                delay: 0.025 * i,
                duration: 0.25,
                ease: "easeInOut",
              }}
              key={i}
              className="inline-block dark:text-slate-500 text-[#aaff80] font-poppins"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RevealLinks;
