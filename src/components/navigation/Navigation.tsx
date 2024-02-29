"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { navigation } from "./data";

const Navigation = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDrawer]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <header className="fixed top-0 z-10 w-full border-b bg-vanilla-powder-500 px-4 text-night-500 shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href={"/"} className="mr-12">
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={70}
              className=""
            />
          </Link>
          <nav className="hidden items-center gap-2 py-2 font-bold sm:flex">
            {navigation.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                className={`px-2 py-2 text-sm decoration-2 underline-offset-[6px] hover:underline md:px-6 md:py-4 md:text-base lg:text-lg ${pathname === navItem.href ? "underline" : "text-night-500"}`}
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
