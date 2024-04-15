"use client";
import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return scroll;
};

export const useResetScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
