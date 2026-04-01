"use client";

import { useEffect, useRef } from "react";

const InfoBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--info-bar-height",
          `${ref.current.offsetHeight}px`,
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
      className="px-4 py-2 text-xs text-center text-balance bg-amber-50 text-amber-800 md:text-sm"
    >
      För tillfället har vi uppnått max antal medlemmar, och därmed ber vi er
      att återkomma vid ett senare tillfälle
    </div>
  );
};

export default InfoBar;
