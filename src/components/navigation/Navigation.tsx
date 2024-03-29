"use client";

import { useScroll } from "@/utils/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { navigation } from "./data";

const Navigation = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const pathname = usePathname();
  const scroll = useScroll();

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDrawer]);
  return (
    <>
      <header
        className={`header transition-all duration-500 ease-in-out ${scroll ? "bg-vanilla-powder-500 text-night-500 shadow-sm" : "bg-transparent text-vanilla-powder-500"}`}
      >
        <div>
          <Link href={"/"} className="mr-12">
            <h1 className="text-3xl tracking-tight md:text-4xl">
              Karl-Alfred Gym
            </h1>
          </Link>
          <nav className="hidden items-center gap-2 py-2 font-bold sm:flex">
            {navigation.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                className={`px-2 py-2 text-sm font-normal decoration-2 underline-offset-[6px] hover:underline md:px-6 md:py-4 md:text-base lg:text-lg ${pathname === navItem.href ? "underline" : ""}`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto block sm:hidden">
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="m-2 -mr-2.5 block rounded p-2 text-3xl text-night-500 hover:text-sky-700"
            >
              <LuMenu />
            </button>
          </div>
        </div>
      </header>
      <MobileMenuDrawer
        currentPage={pathname}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
      />
    </>
  );
};

export default Navigation;
