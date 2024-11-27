"use client";

import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { motion as m } from "motion/react";
import { Poppins } from "next/font/google";
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
  const [quoteIndex, setQouteIndex] = useState<null | number>(1);

  const slideRef = useRef<HTMLDivElement>(null);

  const onClick = (direction: "left" | "right") => {
    console.log(slideRef.current);
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left:
          direction == "left"
            ? -slideRef.current.clientWidth
            : slideRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-[90%] h-[800px] mx-auto border pb-4 items-center">
      <div className="w-full h-[70%] flex">
        <div className="w-[40%] flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full border-primary flex items-center justify-center cursor-pointer"
            onClick={() => onClick("right")}
          >
            <FaArrowLeft className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div ref={slideRef} className="overflow-hidden flex">
            <div className="text-3xl w-full flex-shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              maiores. Impedit obcaecati rem quas. Quos at dolores vero tempore
              enim hic autem porro commodi saepe fugit quo sit, laborum
              excepturi.
            </div>
            <div className="text-3xl w-full flex-shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              maiores. Impedit obcaecati rem quas. Quos at dolores vero tempore
              enim hic autem porro commodi saepe fugit quo sit, laborum
              excepturi.
            </div>
            <div className="text-3xl w-full flex-shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              maiores. Impedit obcaecati rem quas. Quos at dolores vero tempore
              enim hic autem porro commodi saepe fugit quo sit, laborum
              excepturi.
            </div>
          </div>
          <div className="flex-grow">buttons</div>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-primary flex items-center justify-center">
            <FaArrowLeft className="w-8 h-8 rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
