"use client";
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
        className="cursor-pointer text-vanilla-powder-500 hover:text-vanilla-powder-700"
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
        className="relative w-full h-full"
      >
        <SwiperSlide className="bg-[url('/hero-header.png')] bg-cover bg-bottom">
          <div className="inset-0 overlay" />
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/dumbbellroom.png')] bg-cover bg-center">
          <div className="inset-0 overlay" />
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/squatrack.png')] bg-cover bg-center">
          <div className="inset-0 overlay" />
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/bench.png')] bg-cover bg-center">
          <div className="inset-0 overlay" />
        </SwiperSlide>
        <div className="absolute z-50 right-10 top-10">
          <PlayButton />
        </div>
      </Swiper>
      {children}
    </>
  );
};

export default HeaderSwiper;
