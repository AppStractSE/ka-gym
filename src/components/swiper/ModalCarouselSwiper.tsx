"use client";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RxExitFullScreen } from "react-icons/rx";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCarouselSwiper = ({ images, showModal, setShowModal }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);
  return (
    <div className="w-full max-w-screen-xl">
      <Swiper
        className="overflow-hidden rounded-lg"
        loop={true}
        freeMode={false}
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <div className="swiper-button-prev absolute left-4 top-[50%] z-10 hidden transform text-4xl duration-200 ease-in-out hover:scale-125 md:block">
          <div className="rounded-full bg-black p-1">
            <HiChevronLeft />
          </div>
        </div>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-auto min-h-[300px] w-full object-cover"
              src={image}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next absolute right-4 top-[50%] z-10 hidden transform text-4xl duration-200 ease-in-out hover:scale-125 md:block">
          <div className="rounded-full bg-black p-1">
            <HiChevronRight />
          </div>
        </div>
        <div
          onClick={() => setShowModal(false)}
          className="absolute bottom-4 right-4 z-[9999] transform cursor-pointer rounded-full bg-black p-1 text-3xl text-vanilla-powder-500 opacity-80 duration-200 ease-in-out hover:scale-125 hover:opacity-100"
        >
          <RxExitFullScreen />
        </div>
      </Swiper>
      <Swiper
        id="thumbsSwiper"
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={4}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper as any}
        modules={[FreeMode, Navigation, Thumbs]}
        className="overflow-hidden rounded-md py-2"
        breakpoints={{
          640: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModalCarouselSwiper;
