"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import HeaderSwiper from "../swiper/HeaderSwiper";
import PlayButton from "../swiper/PlayButton";

const HeroSection = () => {
  const swiperRefLocal = useRef<SwiperRef>(null);
  const [pauseSlider, setPauseSlider] = useState(false);
  const handlePauseSlider = () => {
    if (swiperRefLocal.current) {
      const swiper = swiperRefLocal.current.swiper;
      if (pauseSlider) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
      setPauseSlider(!pauseSlider);
    }
  };
  return (
    <section className="relative flex min-h-[65vh] w-full items-end px-4 md:min-h-[90vh]">
      <div className="absolute inset-0">
        <HeaderSwiper ref={swiperRefLocal} />
      </div>
      <div className="relative z-50 mx-auto my-24 max-w-6xl flex-1 space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-vanilla-powder-500 md:text-6xl">
            Borås äldsta hardcoregym
          </h1>

          <h6 className="font-base font-medium text-vanilla-powder-500 md:w-1/2 md:text-xl">
            Sedan 1980 har vårt gym varit en fristad för de som vet att äkta
            framsteg kräver hårt arbete och beslutsamhet.
          </h6>
        </div>
        <div className="inline-block">
          <Link
            href="/bli-medlem"
            className="block w-fit rounded bg-vanilla-powder-500 px-6 py-2.5 text-night-500 hover:bg-night-500 hover:text-vanilla-powder-500"
          >
            Bli medlem
          </Link>
        </div>
        <div className="absolute bottom-0 right-0">
          <PlayButton
            pauseSlider={pauseSlider}
            handlePauseSlider={handlePauseSlider}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
