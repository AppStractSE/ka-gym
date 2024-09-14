import AntiDopingInfoSection from "@/components/sections/AntiDopingInfoSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="my-12 w-full px-4 md:my-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 transition-all duration-200 ease-in-out md:grid-cols-3 md:flex-row md:items-center md:gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="mb-4 text-2xl font-medium md:text-4xl">
                Tradition och gemenskap
              </h2>
              <p className="whitespace-pre-line text-base md:text-lg">
                Karl-Alfred Gym har varit ett hem för seriösa
                träningsentusiaster i flera decennier. Trots sin blygsamma
                storlek bär gymmet på en rik historia och en stark känsla av
                gemenskap. Det drivs som en ideell förening, vilket speglar
                medlemmarnas passion för träning och vilja att skapa en hållbar
                träningsmiljö. Gymmet har alltid erbjudit en genuin och
                personlig atmosfär, och dess väggar vittnar om årtionden av hårt
                arbete och hängivenhet.
              </p>
            </div>
            <div className="col-span-1 md:m-0">
              <Image
                alt="Karl-Alfreds Gym stämpellogga"
                src="/karlalfred.png"
                sizes="100vw"
                width={128}
                height={128}
                className="mx-auto max-h-[200px] w-auto md:ml-auto md:mr-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 w-full px-4 md:my-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/hero-header.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-40 grid place-items-center gap-6">
              <h2 className="text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Vårt gym
              </h2>
              <h6 className="font-base text-center text-base text-vanilla-powder-500 md:text-lg">
                I gymmet finner du både maskiner och fria vikter, inklusive
                hantlar upp till 73kg.
              </h6>
            </div>
            <Link
              href="/vart-gym"
              className="relative z-50 mt-auto block w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Läs mer om gymmet
            </Link>
          </div>
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/legpress.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-40 grid place-items-center gap-6">
              <h2 className="text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Träna hos oss
              </h2>
              <h6 className="font-base text-center text-base text-vanilla-powder-500 md:text-lg">
                Kom igång med träningen hos oss och upplev en ny nivå av
                motivation!
              </h6>
            </div>
            <Link
              href="/bli-medlem"
              className="relative z-50 mt-auto block w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </section>
      <section className="my-12 w-full px-4 md:my-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center overflow-hidden rounded-xl bg-vanilla-powder-600 md:grid-cols-3">
            <div className="col-span-1 h-full">
              <img
                src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e"
                className="max-h-full min-h-full"
              />
            </div>
            <div className="col-span-2 p-6 md:p-12">
              <div>
                <h4 className="mb-4 text-2xl font-medium md:text-4xl">
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
      <ContactSection />
      <FAQSection />
      <AntiDopingInfoSection />
    </>
  );
}
