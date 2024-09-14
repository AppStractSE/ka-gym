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
      <section className="my-12 w-full px-4">
        <div className="mx-auto max-w-6xl">
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
                <img className="h-auto w-full" src={image} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next absolute right-4 top-[50%] z-10 hidden transform text-4xl duration-200 ease-in-out hover:scale-125 md:block">
              <div className="rounded-full bg-black p-1">
                <HiChevronRight />
              </div>
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="absolute bottom-4 right-4 z-[9999] transform cursor-pointer rounded-full bg-black p-2 text-base text-vanilla-powder-500 opacity-80 duration-200 ease-in-out hover:scale-125 hover:opacity-100 md:text-xl"
            >
              <BsFullscreen />
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
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalCarouselSwiper
          showModal={showModal}
          setShowModal={setShowModal}
          images={images}
        />
      </Modal>
    </>
  );
};

export default CarouselSwiper;
