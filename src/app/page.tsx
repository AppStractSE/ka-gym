import ContactForm from "@/components/form/ContactForm";
import Grid from "@/components/grid/Grid";
import GridItem from "@/components/grid/GridItem";
import { pictures } from "@/data/pictures";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { LuChevronRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full items-center bg-[url('/hero-header.png')] bg-cover bg-bottom px-4 md:min-h-[85vh] md:items-end ">
        <div className="absolute inset-0 bg-night-500 bg-opacity-60" />
        <div className="relative mx-auto max-w-6xl flex-1 space-y-12 py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-vanilla-powder-500 md:text-6xl">
              Ett av Borås äldsta hardcoregym
            </h1>
            <h6 className="text-lg font-medium text-vanilla-powder-500 md:w-1/2 md:text-xl">
              Sedan 1981 har vårt gym varit en fristad för de som vet att äkta
              framsteg kräver hårt arbete och beslutsamhet. Vi välkomnar alla,
              från nybörjare till veteraner, att delta i vår gemenskap och
              uppleva den genuina känslan av att bli sitt bästa jag.
            </h6>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium md:text-lg">
            <div>
              <Link
                href="/trana"
                className="rounded border border-night-500 bg-night-500 px-4 py-2.5 text-vanilla-powder-500 transition-all duration-300 ease-in-out hover:border-vanilla-powder-500 hover:bg-vanilla-powder-500 hover:text-night-500"
              >
                Bli medlem
              </Link>
            </div>
            <div>
              <Link
                href="/vart-gym"
                className="rounded border-vanilla-powder-500 bg-vanilla-powder-500 px-4 py-2.5 text-night-500 transition-all duration-300 ease-in-out hover:border-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
              >
                Läs mer om gymmet
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 w-full px-4 text-night-500">
        <div className="mx-auto max-w-6xl">
          <Grid>
            {pictures.map((picture, index) => (
              <GridItem
                key={index}
                index={index}
                arrayLength={pictures.length}
                src={picture.src}
                alt={picture.alt}
              />
            ))}
          </Grid>
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl rounded-md bg-night-500 px-4 py-8 lg:px-8 lg:py-12">
          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row md:gap-8">
            <div className="md:max-w-md">
              <h6 className="mb-4 whitespace-pre-line text-lg font-medium text-vanilla-powder-500 md:text-2xl">
                Fyll i formuläret så kontaktar vi dig så snart vi kan!
              </h6>
              <ContactForm />
            </div>
            <div className="md:max-w-sm lg:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Vill du börja träna hos oss?
              </h4>
              <h6 className="mb-8 whitespace-pre-line text-base font-medium text-vanilla-powder-500 md:text-xl">
                Det finns inget att vänta på, kom och träna med oss redan idag!
                {"\n\n"}Fyll i formuläret så kontaktar vi dig så snart vi kan.
                Det går också bra att ringa eller maila oss direkt.
              </h6>
              <div className="flex flex-col justify-center gap-2">
                <a
                  href="tel:+46709405641"
                  className="inline-flex w-fit items-center gap-2 hover:underline hover:underline-offset-4"
                >
                  <HiOutlinePhone />
                  070-940 56 41
                </a>
                <a
                  href="mailto:info@karlalfredgym.se"
                  className="inline-flex w-fit items-center gap-2 hover:underline hover:underline-offset-4"
                >
                  <IoMailOutline />
                  info@karlalfredgym.se
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl rounded-md bg-ka-red-100 px-4 py-8 lg:px-8 lg:py-12">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-8">
            <div className="md:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Karl-Alfreds syn på doping
              </h4>
              <h6 className="mb-8 whitespace-pre-line text-base font-medium text-vanilla-powder-500 md:text-xl">
                {`Användningen av dopning bör undvikas av flera viktiga anledningar. Den kan orsaka betydande skador på kroppen, påverka den mentala hälsan negativt och äventyra relationerna till vänner, arbete, partner och familj. Risken är hög och konsekvenserna allvarliga.\n\nVarje gång någon avstår från dopning innebär det en vinst för många. Vi samverkar därför med Borås stad och andra gym i Borås kallat "Gym i samverkan mot dopningsfri miljö", där det centrala arbetet kretsar kring utbildning och samarbete mellan gym, polis och Borås stad för att förebygga och motverka användningen av dopning.`}
              </h6>
              <div className="flex justify-end">
                <Link
                  href="/antidopingpolicy"
                  className="rounded border bg-night-500 px-4 py-2 text-vanilla-powder-500"
                >
                  Läs mer
                </Link>
              </div>
            </div>
            <div className="md:max-w-md">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 items-center overflow-hidden rounded-lg bg-vanilla-powder-600">
            <div className="col-span-1">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
            </div>
            <div className="col-span-2 p-12 text-night-500">
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
