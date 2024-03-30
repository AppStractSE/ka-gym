"use client";
import { useResetScroll, useScroll } from "@/utils/useScroll";
import { HiChevronUp } from "react-icons/hi";
const ScrollToTop = () => {
  const scroll = useScroll();
  return (
    <div
      onClick={useResetScroll}
      className={`scroll-to-top ${scroll ? "opacity-100" : "invisible opacity-0"}`}
    >
      <HiChevronUp />
    </div>
  );
};

export default ScrollToTop;
