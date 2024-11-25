"use client";

import React from "react";
import { motion } from "motion/react";
import { initialize } from "next/dist/server/lib/render-server";
import { Span } from "next/dist/trace";

type RevealLinksContentProps = {
  children: string;
};

const RevealLinks = () => {
  return <RevealLinksContent>Welcome</RevealLinksContent>;
};

const RevealLinksContent = ({ children }: RevealLinksContentProps) => {
  return (
    <motion.div
      className="relative block overflow-hidden uppercase text-primary"
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
          key={i}
          className="inline-block text-8xl font-poppins"
        >
          {l}
        </motion.span>
      ))}
      <div className="absolute bottom-0 text-8xl">
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
              key={i}
              className="inline-block text-[#aaff80] font-poppins"
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
