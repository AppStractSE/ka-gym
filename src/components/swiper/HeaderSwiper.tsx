import Image from "next/image";
import { forwardRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const HeaderSwiper = forwardRef<SwiperRef>((_, ref) => {
  const images = [
    "/hero-header.png",
    "/dumbbellroom.png",
    "/squatrack.png",
    "/bench.png",
  ];

  return (
    <>
      <Swiper
        ref={ref}
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
        className="relative w-full h-full"
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
            <div className="inset-0 overlay" />
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
      </Swiper>
    </>
  );
});

HeaderSwiper.displayName = "HeaderSwiper";

export default HeaderSwiper;
