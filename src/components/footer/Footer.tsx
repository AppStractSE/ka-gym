import Image from "next/image";
import Link from "next/link";
import stampPic from "public/popeye.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className="shadow-t w-full border-t bg-vanilla-powder-500 px-4 text-black shadow-md">
      <div className="mx-auto max-w-8xl py-12">
        <div className="flex justify-between md:items-end">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6">
            {footerData.map((link) => (
              <div key={link.label}>
                <h2 className="mb-6 text-xl font-semibold">{link.label}</h2>
                <ul className="space-y-2">
                  {link.links.map((link) => (
                    <li key={link.label} className="text-base md:text-lg">
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
          <Link href="/" className="w-2/6 md:w-1/6">
            <Image
              alt="Karl-Alfreds Gym stämpellogga"
              src={stampPic}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="my-6 h-[1px] w-full bg-black opacity-25 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between">
          <a
            href="https://appstract.se/"
            target="_blank"
            className="flex w-fit items-center gap-1 text-xs text-black opacity-50 hover:underline sm:text-center"
          >
            Webbdesign av appstract © 2024
          </a>
          <Link
            href="/integritetspolicy"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
