"use client";

import { useEffect, useRef } from "react";
import { PiInfoBold } from "react-icons/pi";

const InfoBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--info-bar-height",
          `${ref.current.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-2 px-4 py-2 text-xs bg-amber-50 text-amber-800 md:text-sm"
    >
      Gymmet är för tillfället fullsatt, välkommen åter!
    </div>
  );
};

export default InfoBar;
