"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { easeInOut, motion as m } from "motion/react";
import { Poppins, Quicksand } from "next/font/google";
import { cedarvilleCursive } from "@/app/page";
import { Divide } from "lucide-react";
import QUOTES from "@/lib/quotes";

export const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const Slider = () => {
  const [quoteIndex, setQouteIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQouteIndex((prev) => (prev === QUOTES.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
        <div className="hidden w-[40%] md:flex items-center justify-center">
          <m.div
            whileHover={{ scaleX: 1.05 }}
            whileTap={{ scaleX: 0.9 }}
            className="md:w-14 md:h-14 sm:w-8 sm:h-8 rounded-full border border-primary flex items-center justify-center cursor-pointer"
            onClick={() => arrowClick("left")}
          >
            <FaArrowLeft className="md:w-8 md:h-8 w-6 h-6" />
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
            className="hidden md:w-14 md:h-14 sm:w-8 sm:h-8 rounded-full border-primary border md:flex items-center justify-center cursor-pointer"
            whileHover={{ scaleX: 1.05 }}
            whileTap={{ scaleX: 0.9 }}
          >
            <FaArrowLeft
              className="md:w-8 md:h-8 w-6 h-6 rotate-180"
              onClick={() => arrowClick("right")}
            />
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
