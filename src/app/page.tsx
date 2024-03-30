import HeroSection from "@/components/sections/HeroSection";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="my-6 w-full px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/hero-header.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-40 grid place-items-center gap-6">
              <h2 className="text-center text-3xl font-semibold text-vanilla-powder-500 md:text-4xl">
                Vårt gym
              </h2>
              <h6 className="font-base text-center text-base text-vanilla-powder-500 md:text-lg">
                Debitis voluptatem ipsa obcaecati alias quos odio veniam
                aperiam, laudantium ut!
              </h6>
            </div>
            <Link
              href="/vart-gym"
              className="relative z-50 mt-auto block w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Läs mer om gymmet
            </Link>
          </div>
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/legpress.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-40 grid place-items-center gap-6">
              <h2 className="text-center text-3xl font-semibold text-vanilla-powder-500 md:text-4xl">
                Träna hos oss
              </h2>
              <h6 className="font-base text-center text-base text-vanilla-powder-500 md:text-lg">
                Debitis voluptatem ipsa obcaecati alias quos odio veniam
                aperiam, laudantium ut!
              </h6>
            </div>
            <Link
              href="/bli-medlem"
              className="relative z-50 mt-auto block w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </section>

      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center overflow-hidden rounded-xl bg-vanilla-powder-600 md:grid-cols-3">
            <div className="col-span-1">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
            </div>
            <div className="col-span-2 p-6 text-night-500 md:p-12">
              <div>
                <h4 className="mb-4 text-2xl font-medium text-night-500 md:text-4xl">
                  Karl-Alfreds syn på doping
                </h4>
                <p className="mb-12 text-base">
                  Varje gång någon avstår från dopning innebär det en vinst för
                  många. Vi samverkar därför med Borås stad och andra gym i
                  Borås kallat {`"Gym i samverkan mot dopningsfri miljö"`}, där
                  det centrala arbetet kretsar kring utbildning och samarbete
                  mellan gym, polis och Borås stad för att förebygga och
                  motverka användningen av dopning.
                </p>
                <div className="flex justify-end">
                  <Link
                    href="/antidopingpolicy"
                    className="inline-flex items-center gap-2 text-base text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Läs mer
                    <LuChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
