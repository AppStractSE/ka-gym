import Grid from "@/components/grid/Grid";
import GridItem from "@/components/grid/GridItem";
import { pictures } from "@/data/pictures";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full items-center bg-orange-300 bg-[url('/hero-header.png')] bg-cover bg-bottom px-4 md:min-h-[85vh] md:items-end ">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative mx-auto max-w-8xl flex-1 space-y-12 py-24">
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
                className="rounded border border-black bg-black px-4 py-2.5 text-vanilla-powder-500 transition-all duration-300 ease-in-out hover:border-vanilla-powder-500 hover:bg-vanilla-powder-500 hover:text-black"
              >
                Bli medlem
              </Link>
            </div>
            <div>
              <Link
                href="/vart-gym"
                className="rounded border-vanilla-powder-500 bg-vanilla-powder-500 px-4 py-2.5 text-black transition-all duration-300 ease-in-out hover:border-black hover:bg-black hover:text-vanilla-powder-500"
              >
                Läs mer om gymmet
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-vanilla-powder-500 px-4 text-black">
        <div className="mx-auto max-w-8xl py-12">
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
      <section className="w-full bg-[#141513] px-4">
        <div className="mx-auto flex max-w-8xl items-center justify-center py-24">
          <div className="max-w-lg space-y-12 text-center">
            <h4 className="text-5xl font-semibold text-vanilla-powder-500">
              Vill du träna hos oss?
            </h4>
            <h6 className="text-2xl font-medium text-vanilla-powder-500">
              Det finns inget att vänta på. Tryck på länken och kom och träna
              med oss redan idag!
            </h6>
            <div>
              <Link
                href="/trana"
                className="rounded border px-4 py-2 hover:bg-vanilla-powder-500 hover:text-black"
              >
                Bli medlem
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-vanilla-powder-500 px-4">
        <div className="mx-auto max-w-8xl py-24">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h4 className="mb-4 text-4xl font-medium text-black">
                Karl Alfreds syn på doping
              </h4>
              <h6 className="mb-8 text-xl font-medium text-black whitespace-pre-line">
                {`Användningen av dopning bör undvikas av flera viktiga anledningar. Den kan orsaka betydande skador på kroppen, påverka den mentala hälsan negativt och äventyra relationerna till vänner, arbete, partner och familj. Risken är hög och konsekvenserna allvarliga.\n\nVarje gång någon avstår från dopning innebär det en vinst för många. Därför jobbar vi med 100% Ren hårdträning, där det centrala arbetet kretsar kring utbildning och samarbete mellan gym, polis och Borås stad för att förebygga och motverka användningen av dopning.`}
              </h6>
              <div className="flex justify-end">
                <Link
                  href="/trana"
                  className="rounded border bg-black px-4 py-2 text-vanilla-powder-500"
                >
                  Läs mer
                </Link>
              </div>
            </div>

            <div className="max-w-md space-y-12">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
              <div></div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full px-4 bg-blue-300 ">
        <div className="py-12 mx-auto max-w-8xl ">Section 4</div>
      </section>
      <section className="w-full px-4 bg-green-300 ">
        <div className="py-12 mx-auto max-w-8xl ">Section 5</div>
      </section> */}
    </>
  );
}
