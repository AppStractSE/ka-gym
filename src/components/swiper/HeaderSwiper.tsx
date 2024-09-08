import Image from "next/image";
import { forwardRef } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
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
          clickable: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
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
          <div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </>
  );
});

HeaderSwiper.displayName = "HeaderSwiper";

export default HeaderSwiper;
