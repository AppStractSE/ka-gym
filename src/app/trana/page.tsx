import Image from "next/image";
const page = () => {
  return (
    <>
      <section className="relative flex w-full items-center bg-[url('/tryon.png')] bg-cover bg-center px-4 md:min-h-[70vh]">
        <div className="bg-night-500 absolute inset-0 bg-opacity-60" />
        <div className="relative mx-auto max-w-6xl flex-1 space-y-12 py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-vanilla-powder-500 md:text-6xl">
              Träna hos oss
            </h1>
            <p className="whitespace-pre-line text-lg font-medium text-vanilla-powder-500 md:w-1/2 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ducimus harum dolorum, eos odit amet excepturi vero ipsam sed.
              Provident, autem quo perferendis qui sit voluptate dignissimos
              quod unde. Unde.
            </p>
          </div>
        </div>
      </section>
      <section className="my-6 w-full px-4">
        <div className="bg-ka-red-100 mx-auto max-w-6xl rounded-md px-4 py-8 lg:px-8 lg:py-12">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-8">
            <div className="md:max-w-lg">
              <h4 className="mb-4 text-2xl font-medium text-vanilla-powder-500 md:text-4xl">
                Karl-Alfreds syn på doping
              </h4>
              <h6 className="mb-8 whitespace-pre-line text-base font-medium text-vanilla-powder-500 md:text-xl">
                {`Användningen av dopning bör undvikas av flera viktiga anledningar. Den kan orsaka betydande skador på kroppen, påverka den mentala hälsan negativt och äventyra relationerna till vänner, arbete, partner och familj. Risken är hög och konsekvenserna allvarliga.\n\nVarje gång någon avstår från dopning innebär det en vinst för många. Vi samverkar därför med Borås stad och andra gym i Borås kallat "Gym i samverkan mot dopningsfri miljö", där det centrala arbetet kretsar kring utbildning och samarbete mellan gym, polis och Borås stad för att förebygga och motverka användningen av dopning.`}
              </h6>
            </div>
            <div className="md:max-w-md">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-night-500 w-full bg-vanilla-powder-500 px-4">
        <div className="mx-auto max-w-6xl py-12">
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
    </>
  );
};

export default page;
