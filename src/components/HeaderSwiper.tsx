"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { GrPauseFill, GrPlayFill } from "react-icons/gr";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeaderSwiper = ({ children }: any) => {
  const swiperRefLocal = useRef<any>(null);
  const [pauseSlider, setPauseSlider] = useState(false);

  const PlayButton = () => {
    return (
      <div
        className="cursor-pointer rounded-md bg-night-600 p-2 text-2xl text-vanilla-powder-500 opacity-75 hover:opacity-100"
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
      console.log(swiperRefLocal.current.swiper);
    }
    console.log("yes");
  };

  const images = [
    "/hero-header.png",
    "/dumbbellroom.png",
    "/squatrack.png",
    "/bench.png",
  ];

  return (
    <>
      <Swiper
        ref={swiperRefLocal}
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        loop={true}
        pagination={{
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        className="relative h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              key={index}
              src={image}
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
        ))}

        <div className="absolute bottom-8 left-0 right-0 z-[999] mx-auto w-fit">
          <div className="flex items-center gap-0.5">
            <div className="swiper-button-prev">
              <HiChevronLeft />
            </div>
            <div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-button-next">
              <HiChevronRight />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-[2.5%] z-[9999]">
          <PlayButton />
        </div>
      </Swiper>
      {children}
    </>
  );
};

export default HeaderSwiper;
