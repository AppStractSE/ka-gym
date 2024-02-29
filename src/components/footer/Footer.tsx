import Image from "next/image";
import Link from "next/link";
import stampPic from "public/karlalfred.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className="shadow-t w-full border-t bg-vanilla-powder-500 px-4 text-night-500 shadow-md">
      <div className="mx-auto max-w-6xl pb-4 pt-8">
        <div className="flex justify-between items-start md:items-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {footerData.map((link) => (
              <div key={link.label}>
                <h2 className="mb-2 text-lg md:text-xl font-semibold">{link.label}</h2>
                <ul className="space-y-1">
                  {link.links.map((link) => (
                    <li key={link.label} className="text-sm md:text-lg">
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
              className="w-auto max-h-[110px] sm:max-h-[200px]"
              />
          </Link>
              </div>
        </div>
        <div className="my-6 h-[1px] w-full bg-night-500 opacity-25 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://appstract.se/"
            target="_blank"
            className="mb-2 flex w-fit items-center gap-1 text-xs text-night-500 opacity-50 hover:underline sm:text-center"
          >
            Webbdesign av appstract © 2024
          </a>
          <div className="flex items-center gap-1">
            <Link
              href="/antidoping"
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
