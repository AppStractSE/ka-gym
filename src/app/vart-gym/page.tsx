import SubpageHeader from "@/components/sections/SubpageHeader";
import CarouselSwiper from "@/components/swiper/CarouselSwiper";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

const page = () => {
  return (
    <>
      <SubpageHeader title="Vårt gym" image="bg-[url('/legpress.png')]" />
      <CarouselSwiper />
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
};

export default page;
