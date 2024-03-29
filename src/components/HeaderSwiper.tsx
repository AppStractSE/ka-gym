"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { GrPauseFill, GrPlayFill } from "react-icons/gr";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeaderSwiper = ({ children }: any) => {
  const swiperRefLocal = useRef<any>(null);
  const [pauseSlider, setPauseSlider] = useState(false);

  const PlayButton = () => {
    return (
      <div
        className="cursor-pointer text-2xl text-vanilla-powder-500 hover:text-vanilla-powder-700"
        onClick={handlePauseSlider}
      >
        {pauseSlider ? <GrPlayFill /> : <GrPauseFill />}
      </div>
    );
  };

  const handlePauseSlider = () => {
    if (swiperRefLocal.current) {
      if (pauseSlider) {
        swiperRefLocal.current.swiper.autoplay.start();
        setPauseSlider(false);
      } else {
        swiperRefLocal.current.swiper.autoplay.stop();
        setPauseSlider(true);
      }
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRefLocal}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="relative h-full w-full"
      >
        <SwiperSlide>
          <Image
            src="/hero-header.png"
            alt="Hero header"
            layout="fill"
            objectFit="cover"
            priority={true}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
            className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
          />
          <div className="overlay inset-0" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/dumbbellroom.png"
            alt="Hero header"
            layout="fill"
            objectFit="cover"
            priority={true}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
            className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
          />
          <div className="overlay inset-0" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/squatrack.png"
            alt="Hero header"
            layout="fill"
            objectFit="cover"
            priority={true}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
            className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
          />
          <div className="overlay inset-0" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bench.png"
            alt="Hero header"
            layout="fill"
            objectFit="cover"
            priority={true}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
            className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
          />
          <div className="overlay inset-0" />
        </SwiperSlide>
        <div className="absolute bottom-[5%] right-[2.5%] z-50">
          <PlayButton />
        </div>
      </Swiper>
      {children}
    </>
  );
};

export default HeaderSwiper;
