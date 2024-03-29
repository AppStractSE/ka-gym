import Image from "next/image";
import Link from "next/link";
import stampPic from "public/karlalfred.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className="w-full px-4 border-t shadow-md shadow-t bg-gradient-to-b from-night-600 to-night-500 text-vanilla-powder-500">
      <div className="max-w-6xl pt-8 pb-4 mx-auto">
        <div className="flex items-start justify-between md:items-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {footerData.map((link) => (
              <div key={link.label}>
                <h2 className="mb-2 text-lg md:text-xl">
                  {link.label}
                </h2>
                <ul className="space-y-1">
                  {link.links.map((link) => (
                    <li key={link.label} className="text-sm md:text-base">
                      {link.internal ? (
                        <Link
                          href={link.href}
                          className="hover:underline hover:underline-offset-4"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          className="inline-flex items-center gap-1 hover:underline hover:underline-offset-4"
                        >
                          {link.label}
                          {link.icon ? (
                            <small>
                              <HiOutlineExternalLink />
                            </small>
                          ) : (
                            <></>
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="">
            <Link href="/">
              <Image
                alt="Karl-Alfreds Gym stämpellogga"
                src={stampPic}
                sizes="100vw"
                className="max-h-[110px] w-auto sm:max-h-[200px]"
              />
            </Link>
          </div>
        </div>
        <div className="my-6 h-[1px] w-full bg-night-500 opacity-25 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://appstract.se/"
            target="_blank"
            className="flex items-center gap-1 mb-2 text-xs opacity-50 w-fit text-vanilla-powder-400 hover:underline sm:text-center"
          >
            Webbdesign av appstract © 2024
          </a>
          <div className="flex items-center gap-1">
            <Link
              href="/antidopingpolicy"
              className="text-sm hover:underline hover:underline-offset-4"
            >
              Antidopingpolicy
            </Link>
            <span>
              <small>•</small>
            </span>
            <Link
              href="/integritetspolicy"
              className="text-sm hover:underline hover:underline-offset-4"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
