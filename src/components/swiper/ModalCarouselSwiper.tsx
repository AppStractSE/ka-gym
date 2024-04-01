"use client";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RxExitFullScreen } from "react-icons/rx";
import { FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  thumbsSwiper: any;
  setThumbsSwiper: any;
}

const ModalCarouselSwiper = ({
  images,
  showModal,
  setShowModal,
  thumbsSwiper,
  setThumbsSwiper,
}: Props) => {
  const [newThumbsSwiper, setNewThumbsSwiper] = useState(thumbsSwiper);
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
    <div className="flex h-full flex-col py-2">
      <div className="h-full w-full">
        <Swiper
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          thumbs={{ swiper: newThumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Keyboard]}
          className="h-full"
        >
          <div className="swiper-button-prev absolute left-0 top-[50%] z-10 transform text-5xl duration-200 ease-in-out hover:scale-125">
            <HiChevronLeft />
          </div>
          {images.map((image, index) => (
            <SwiperSlide className="mx-auto h-auto w-full" key={index}>
              <img
                className="mx-auto h-full rounded-lg object-contain"
                src={image}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next absolute right-0 top-[50%] z-10 transform text-5xl duration-200 ease-in-out hover:scale-125">
            <HiChevronRight />
          </div>
          <div
            onClick={() => setShowModal(!showModal)}
            className="absolute bottom-4 right-4 z-10 transform cursor-pointer text-4xl text-vanilla-powder-500 opacity-80 duration-200 ease-in-out hover:scale-125 hover:opacity-100"
          >
            <RxExitFullScreen />
          </div>
        </Swiper>
      </div>
      <div>
        <Swiper
          grabCursor={true}
          onSwiper={setNewThumbsSwiper as any}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          spaceBetween={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img src={image} className="h-full rounded-lg object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalCarouselSwiper;
