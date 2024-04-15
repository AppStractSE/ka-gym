import SubpageHeader from "@/components/sections/SubpageHeader";

const page = () => {
  return (
    <>
      <SubpageHeader title="Antidopingpolicy" image="bg-[url('/cardio.png')]" />
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
            </div>
            <div className="md:max-w-md">
              <img src="https://85158a7b9e.clvaw-cdnwnd.com/d2564caf77c7232d079ab0cfb3a6eb82/200000220-ac896ac89b/100.webp?ph=85158a7b9e" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
