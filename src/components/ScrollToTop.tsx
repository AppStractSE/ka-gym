"use client";
import { useResetScroll, useScroll } from "@/utils/useScroll";
import { HiChevronUp } from "react-icons/hi";
const ScrollToTop = () => {
  const scroll = useScroll();
  return (
    <div
      onClick={useResetScroll}
      className={`mix-blend-difference fixed bottom-8 right-[2.5%] z-[99999] cursor-pointer rounded-xl text-night-700 p-2 text-2xl bg-vanilla-powder-300 transition-all duration-500 ${scroll ? "opacity-100" : "invisible opacity-0"}`}
    >
      <HiChevronUp />
    </div>
  );
};

export default ScrollToTop;