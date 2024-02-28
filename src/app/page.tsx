import Grid from "@/components/grid/Grid";
import GridItem from "@/components/grid/GridItem";
import { pictures } from "@/data/pictures";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full items-center bg-orange-300 bg-[url('/hero-header.png')] bg-cover bg-bottom px-4 md:min-h-[85vh] md:items-end ">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative flex-1 py-24 mx-auto space-y-12 max-w-8xl">
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
      <section className="w-full px-4 text-black bg-vanilla-powder-500">
        <div className="py-12 mx-auto max-w-8xl">
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
        <div className="flex items-center justify-center py-24 mx-auto max-w-8xl">
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
                className="px-4 py-2 border rounded hover:bg-vanilla-powder-500 hover:text-black"
              >
                Bli medlem
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 bg-vanilla-powder-500">
        <div className="py-8 mx-auto max-w-7xl lg:py-24">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:gap-8 md:flex-row">
            <div className="md:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-black md:text-4xl">
                Karl-Alfreds syn på doping
              </h4>
              <h6 className="mb-8 text-base font-medium text-black whitespace-pre-line md:text-xl">
                {`Användningen av dopning bör undvikas av flera viktiga anledningar. Den kan orsaka betydande skador på kroppen, påverka den mentala hälsan negativt och äventyra relationerna till vänner, arbete, partner och familj. Risken är hög och konsekvenserna allvarliga.\n\nVarje gång någon avstår från dopning innebär det en vinst för många. Därför jobbar vi med 100% Ren hårdträning, där det centrala arbetet kretsar kring utbildning och samarbete mellan gym, polis och Borås stad för att förebygga och motverka användningen av dopning.`}
              </h6>
              <div className="flex justify-end">
                <Link
                  href="/renhardtraning"
                  className="px-4 py-2 bg-black border rounded text-vanilla-powder-500"
                >
                  Läs mer
                </Link>
              </div>
            </div>

            <div className="md:max-w-md">
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
