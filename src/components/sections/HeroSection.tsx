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
    <section className="relative flex min-h-[70vh] w-full items-end px-4 md:min-h-[90vh]">
      <div className="absolute inset-0">
        <HeaderSwiper ref={swiperRefLocal} />
      </div>
      <div className="relative z-50 flex-1 max-w-6xl mx-auto mb-24">
        <h1 className="mb-4 text-4xl text-vanilla-powder-500 md:text-6xl">
          Borås äldsta hardcoregym
        </h1>
        <h6 className="max-w-sm mb-12 font-medium text-vanilla-powder-500 md:max-w-lg md:text-xl">
          Sedan 1980 har vårt gym varit en fristad för de som vet att äkta
          framsteg kräver hårt arbete och beslutsamhet.
        </h6>
        <div className="inline-block">
          <Link
            href="/bli-medlem"
            className="block w-fit rounded bg-vanilla-powder-500 px-6 py-2.5 hover:bg-night-500 hover:text-vanilla-powder-500"
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
