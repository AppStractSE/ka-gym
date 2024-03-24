import HeaderSwiper from "@/components/HeaderSwiper";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full items-center px-4 md:min-h-[85vh] md:items-end">
        <div className="absolute inset-0">
          <HeaderSwiper />
        </div>
        <div className="relative z-50 flex-1 max-w-6xl mx-auto my-24 space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-vanilla-powder-500 md:text-6xl">
              Borås äldsta hardcoregym
            </h1>
            <h6 className="font-medium font-base text-vanilla-powder-500 md:w-1/2 md:text-xl">
              Sedan 1980 har vårt gym varit en fristad för de som vet att äkta
              framsteg kräver hårt arbete och beslutsamhet.
            </h6>
          </div>
          <div>
            <Link
              href="/bli-medlem"
              className="rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full px-4 my-6">
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/hero-header.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="inset-0 overlay" />
            <div className="relative z-40 grid gap-6 place-items-center">
              <h2 className="text-3xl font-semibold text-center text-vanilla-powder-500 md:text-4xl">
                Vårt gym
              </h2>
              <h6 className="text-base text-center font-base text-vanilla-powder-500 md:text-lg">
                Debitis voluptatem ipsa obcaecati alias quos odio veniam
                aperiam, laudantium ut!
              </h6>
            </div>
            <Link
              href="/vart-gym"
              className="relative z-50 mt-auto w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Läs mer om gymmet
            </Link>
          </div>
          <div className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl bg-night-400 bg-[url('/legpress.png')] bg-cover bg-bottom px-12 py-6 md:min-h-[35rem] md:px-24 md:py-12">
            <div className="inset-0 overlay" />
            <div className="relative z-40 grid gap-6 place-items-center">
              <h2 className="text-3xl font-semibold text-center text-vanilla-powder-500 md:text-4xl">
                Träna hos oss
              </h2>
              <h6 className="text-base text-center font-base text-vanilla-powder-500 md:text-lg">
                Debitis voluptatem ipsa obcaecati alias quos odio veniam
                aperiam, laudantium ut!
              </h6>
            </div>
            <Link
              href="/bli-medlem"
              className="relative z-50 mt-auto w-fit place-self-center rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="w-full px-4 my-6 text-night-500">
        <div className="max-w-6xl mx-auto">
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
      </section> */}
      {/* <section className="w-full px-4 my-6">
        <div className="max-w-6xl px-4 py-8 mx-auto rounded-md bg-night-500 lg:px-8 lg:py-12">
          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row md:gap-8">
            <div className="md:max-w-md">
              <h6 className="mb-4 text-lg font-medium whitespace-pre-line text-vanilla-powder-500 md:text-2xl">
                Fyll i formuläret så kontaktar vi dig så snart vi kan!
              </h6>
              <ContactForm />
            </div>
            <div className="md:max-w-sm lg:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Vill du börja träna hos oss?
              </h4>
              <h6 className="mb-8 text-base font-medium whitespace-pre-line text-vanilla-powder-500 md:text-xl">
                Det finns inget att vänta på, kom och träna med oss redan idag!
                {"\n\n"}Fyll i formuläret så kontaktar vi dig så snart vi kan.
                Det går också bra att ringa eller maila oss direkt.
              </h6>
              <div className="flex flex-col justify-center gap-2">
                <a
                  href="tel:+46709405641"
                  className="inline-flex items-center gap-2 w-fit hover:underline hover:underline-offset-4"
                >
                  <HiOutlinePhone />
                  070-940 56 41
                </a>
                <a
                  href="mailto:info@karlalfredgym.se"
                  className="inline-flex items-center gap-2 w-fit hover:underline hover:underline-offset-4"
                >
                  <IoMailOutline />
                  info@karlalfredgym.se
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="w-full px-4 my-6">
        <div className="max-w-6xl px-4 py-8 mx-auto rounded-md bg-ka-red-100 lg:px-8 lg:py-12">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-8">
            <div className="md:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Karl-Alfreds syn på doping
              </h4>
              <h6 className="mb-8 text-base font-medium whitespace-pre-line text-vanilla-powder-500 md:text-xl">
                {`Användningen av dopning bör undvikas av flera viktiga anledningar. Den kan orsaka betydande skador på kroppen, påverka den mentala hälsan negativt och äventyra relationerna till vänner, arbete, partner och familj. Risken är hög och konsekvenserna allvarliga.\n\nVarje gång någon avstår från dopning innebär det en vinst för många. Vi samverkar därför med Borås stad och andra gym i Borås kallat "Gym i samverkan mot dopningsfri miljö", där det centrala arbetet kretsar kring utbildning och samarbete mellan gym, polis och Borås stad för att förebygga och motverka användningen av dopning.`}
              </h6>
              <div className="flex justify-end">
                <Link
                  href="/antidopingpolicy"
                  className="px-4 py-2 border rounded bg-night-500 text-vanilla-powder-500"
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
      </section> */}
      <section className="w-full px-4 my-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 overflow-hidden rounded-xl bg-vanilla-powder-600 md:grid-cols-3">
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
