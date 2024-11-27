"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { easeInOut, motion as m } from "motion/react";
import { Poppins, Quicksand } from "next/font/google";
import { cedarvilleCursive } from "@/app/page";
import { Divide } from "lucide-react";

export const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const QUOTES: { id: number; writer: string; quote: string }[] = [
  {
    writer: "Carl Gustav Jung",
    quote:
      "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
  },
  {
    writer: "Socrates",
    quote: "The only true wisdom is in knowing you know nothing.",
  },
  {
    writer: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    writer: "Buddha",
    quote: "The mind is everything. What you think you become.",
  },
  {
    writer: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    writer: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    writer: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    writer: "Martin Luther King Jr.",
    quote: "The time is always right to do what is right.",
  },
  {
    writer: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    writer: "Lao Tzu",
    quote: "The journey of a thousand miles begins with one step.",
  },
].map((item, idx) => ({ ...item, id: idx + 1 }));

const Slider = () => {
  const [quoteIndex, setQouteIndex] = useState<number>(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const arrowClick = (param: "left" | "right") => {
    if (param == "left") {
      if (quoteIndex == 0) {
        return;
      }
      setQouteIndex((prev) => prev - 1);
    }
    if (param == "right") {
      if (quoteIndex === QUOTES.length - 1) {
        return setQouteIndex((prev) => 0);
      }
      setQouteIndex((prev) => prev + 1);
    }
  };

  const handleClick = (id: number) => {
    console.log(id);
    setQouteIndex((prev) => id - 1);
  };

  return (
    <div className="flex w-[90%] h-[800px] mx-auto pb-4 items-center">
      <div className="w-full h-[70%] flex">
        <div className="w-[40%] flex items-center justify-center">
          <m.div
            whileHover={{ scaleX: 1.05 }}
            whileTap={{ scaleX: 0.9 }}
            className="w-14 h-14 rounded-full border border-primary flex items-center justify-center cursor-pointer"
            onClick={() => arrowClick("left")}
          >
            <FaArrowLeft className="w-8 h-8" />
          </m.div>
        </div>

        <div className="overflow-hidden flex-grow flex items-center relative">
          <div className="absolute bottom-0 w-full">
            <div className="flex w-full justify-center gap-4">
              {QUOTES.map((q, i) => {
                return (
                  <div
                    onClick={() => handleClick(q.id)}
                    key={q.id}
                    className={`${
                      quoteIndex + 1 == q.id
                        ? "dark:bg-slate-500 bg-[#aaff80]"
                        : "bg-secondary"
                    } w-6 h-6 rounded-full cursor-pointer`}
                  ></div>
                );
              })}
            </div>
          </div>
          <m.div
            animate={{
              x: `-${quoteIndex * 100}%`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            ref={slideRef}
            className={`w-full h-full flex items-center`}
          >
            {QUOTES.map((q, i) => {
              return (
                <div
                  key={q.id}
                  className="w-full flex-shrink-0 items-center text-center flex flex-col gap-4"
                >
                  <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                    {q.quote}
                  </div>
                  <div
                    className={`${cedarvilleCursive.className} text-xl sm:text-2xl md:text-4xl lg:text-5xl`}
                  >
                    {q.writer}
                  </div>
                </div>
              );
            })}
          </m.div>
        </div>

        <div className="w-[40%] flex items-center justify-center">
          <m.div
            className="w-14 h-14 rounded-full border-primary border flex items-center justify-center cursor-pointer"
            whileHover={{ scaleX: 1.05 }}
            whileTap={{ scaleX: 0.9 }}
          >
            <FaArrowLeft
              className="w-8 h-8 rotate-180"
              onClick={() => arrowClick("right")}
            />
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
