import { Bebas_Neue, Outfit } from "next/font/google";
export const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas-neue",
});
