import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full items-center bg-orange-300 bg-[url('/hero-header.png')] bg-cover bg-bottom px-4 md:min-h-[85vh] md:items-end ">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="max-w-8xl relative mx-auto flex-1 space-y-12 py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-6xl">
              Ett av Borås äldsta hardcoregym
            </h1>
            <h6 className="text-lg font-medium md:w-1/2 md:text-xl">
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
                className="text-vanilla-powder-500 hover:bg-vanilla-powder-500 hover:border-vanilla-powder-500 rounded border border-black bg-black px-4 py-2.5 transition-all duration-300 ease-in-out hover:text-black"
              >
                Bli medlem
              </Link>
            </div>
            <div>
              <Link
                href="/vart-gym"
                className="bg-vanilla-powder-500 hover:text-vanilla-powder-500 border-vanilla-powder-500 rounded px-4 py-2.5 text-black transition-all duration-300 ease-in-out hover:border-black hover:bg-black"
              >
                Läs mer om gymmet
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-vanilla-powder-500 w-full px-4 text-black">
        <div className="max-w-8xl mx-auto py-12">
          <div className="grid grid-cols-4 grid-rows-3 gap-2 [&>*]:overflow-hidden [&>*]:rounded-sm ">
            <div className="col-span-1 row-span-2">
              <Image
                src="/hero-header.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/row.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/legpress.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-2">
              <Image
                src="/hacksquat.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/cardio.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-2">
              <Image
                src="/squatrack.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/bench.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/tryon.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/dumbbellroom.png"
                alt=""
                className="h-full object-cover"
                width={1280}
                height={1280}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-vanilla-powder-500 w-full bg-[#141513] px-4">
        <div className="max-w-8xl mx-auto flex items-center justify-center py-24">
          <div className="max-w-lg space-y-12 text-center">
            <h4 className="text-5xl">Vill du träna hos oss?</h4>
            <h6 className="text-2xl">
              Det finns inget att vänta på. Tryck på länken och kom och träna
              med oss redan idag!
            </h6>
            <div>
              <Link
                href="/trana"
                className="hover:bg-vanilla-powder-500 rounded border px-4 py-2 hover:text-black"
              >
                Bli medlem
              </Link>
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
