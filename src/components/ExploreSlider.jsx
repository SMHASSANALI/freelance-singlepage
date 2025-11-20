"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ExploreSlider = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const imageArray = [
    {
      imgSrc: "/images/placeholders/Picture2.jpg",
      heading: "Global Network",
      description:
        "Reliable sourcing and distribution backed by offices in Australia, South Asia, North America.",
    },
    {
      imgSrc: "/images/placeholders/Picture6.jpg",
      heading: "Quality & Compliance",
      description:
        "Strict adherence to Australian and international standards, especially for Medical Goods.",
    },
    {
      imgSrc: "/images/placeholders/mountain.jpg",
      heading: "Congestion",
      description:
        "Explore road route information by distance and duration at different times of the day, on different days and in different months.",
    },
    {
      imgSrc: "/images/placeholders/camera.jpg",
      heading: "Dual Expertise",
      description:
        "Proficiency in both critical Medical and high-volume FMCG trade.",
    },
    {
      imgSrc: "/images/placeholders/earphones.jpg",
      heading: "Market Access",
      description:
        "Specialized expertise in connecting goods between Australia and South Asian markets.",
    },
  ];

  return (
    <main className="py-10 flex flex-col justify-center">
      <section className="">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-center md:text-left">
            Why Partner with Aylux?
          </h3>
        </div>

        <div
          className="pb-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} inline-block w-8 h-2 rounded-full bg-gray-400 transition-all duration-300"></span>`;
              },
            }}
            ref={swiperRef}
          >
            {imageArray.map((data, index) => (
              <SwiperSlide className="pb-10" key={index}>
                <div className="w-[300px] h-[450px] cursor-grab bg-white shadow-lg">
                  <div className="w-full h-[200px] relative">
                    <Image
                      src={data.imgSrc}
                      alt={data.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <h3 className="text-xl font-semibold">{data.heading}</h3>
                    <p className="text-lg text-gray-600">{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom styling for active pagination bullet */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #9ca3af; /* gray-400 */
            opacity: 1;
            width: 32px;
            height: 4px;
            border-radius: 9999px;
            margin: 0 4px !important;
          }
          .swiper-pagination-bullet-active {
            background: #06b6d4 !important; /* cyan-500 */
            width: 40px !important;
          }
        `}</style>
      </section>
    </main>
  );
};

export default ExploreSlider;
