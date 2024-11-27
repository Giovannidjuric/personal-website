import RevealLinks from "@/components/RevealLinks";
import Slider from "@/components/Slider";
import { Cedarville_Cursive } from "next/font/google";

export const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="grid px-4 place-content-center h-[calc(100%-130px)] mt-2">
        <div className="flex flex-col gap-4">
          <RevealLinks />
          <div
            className={`${cedarvilleCursive.className} md:text-2xl lg:text-4xl sm: text-xl`}
          >
            <div>Thank you for checking out my page.</div>
            <div className={`flex justify-center`}>I hope you like it.</div>
            <div className={`flex justify-end`}>Kind regards,</div>
            <div className={` flex justify-end`}>Giovanni</div>
          </div>
        </div>
      </div>
    </>
  );
}
