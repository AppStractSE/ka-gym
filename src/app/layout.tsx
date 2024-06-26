import Main from "@/components/Main";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";

import { bebas_neue, outfit } from "@/utils/fonts";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Karl-Alfred Gym",
  description:
    "Karl-Alfred Gym i Borås, ett av Sveriges äldsta hardcoregym. Vi har funnits sedan 1980 och har alltid varit ett gym för alla.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${bebas_neue.variable}`}>
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
