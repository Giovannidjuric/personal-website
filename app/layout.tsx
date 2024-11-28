import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import SliderMap2 from "@/components/SliderMap2";
import MusicGrid from "@/components/MusicGrid";

export const metadata: Metadata = {
  title: "Giovanni's Portfolio",
  description: "Personal Project to have fun",
};

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <div className="container w-screen h-screen mx-auto p-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
        <Slider />
        <MusicGrid />
      </body>
    </html>
  );
}
