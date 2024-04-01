"use client";
import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../modal/Modal";
import ModalCarouselSwiper from "./ModalCarouselSwiper";

const CarouselSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const images = [
    "/carousel/1.png",
    "/carousel/2.png",
    "/carousel/3.png",
    "/carousel/4.png",
    "/carousel/5.png",
    "/carousel/6.png",
    "/carousel/7.png",
    "/carousel/8.png",
    "/carousel/9.png",
  ];
  return (
    <>
      <section className="my-6 w-full px-4">
        <div className="mx-auto max-w-6xl">
          {/* <h4 className="mb-2 text-2xl font-medium text-night-500 md:text-4xl">
            Bildgalleri
          </h4> */}
          <Swiper
            className="overflow-hidden rounded-xl"
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
            <div className="swiper-button-prev absolute left-0 top-[50%] z-10 transform text-5xl duration-200 ease-in-out hover:scale-125">
              <HiChevronLeft />
            </div>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img className="h-auto w-full" src={image} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next absolute right-0 top-[50%] z-10 transform text-5xl duration-200 ease-in-out hover:scale-125">
              <HiChevronRight />
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="absolute bottom-4 right-4 z-[9999] transform cursor-pointer text-2xl text-vanilla-powder-500 opacity-80 duration-200 ease-in-out hover:scale-125 hover:opacity-100"
            >
              <BsFullscreen />
            </div>
          </Swiper>
          <Swiper
            grabCursor={true}
            loop={true}
            slidesPerView={7}
            spaceBetween={4}
            freeMode={true}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper as any}
            modules={[FreeMode, Navigation, Thumbs]}
            className="py-2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className="rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalCarouselSwiper
          thumbsSwiper={thumbsSwiper}
          setThumbsSwiper={setThumbsSwiper}
          showModal={showModal}
          setShowModal={setShowModal}
          images={images}
        />
      </Modal>
    </>
  );
};

export default CarouselSwiper;
