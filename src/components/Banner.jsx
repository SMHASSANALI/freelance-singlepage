"use client";

import React from "react";
import CircularButton from "./CircularButton";
import Image from "next/image";

const Banner = () => {
  return (
    <main className="w-full relative h-[70dvh]">
      <div className="bg-black/40 inset-0 absolute z-0" />
      <div className="inset-0 absolute -z-1 h-full w-full">
        <Image
          src="/images/home/banner.jpg"
          alt="banner"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="py-20 flex flex-col w-full max-w-7xl mx-auto gap-6 px-16 text-[#ffffff] z-20 relative ">
        <h1 className="text-6xl font-bold">AYLUX.</h1>
        <p className="text-2xl font-semibold max-w-sm">
          Global Supply Chain. Done Right.
        </p>
        <p className="text-lg max-w-2xl">
          Australian-headquartered | Strict compliance | Seamless trade in
          Medical Goods & FMCG between Australia and South Asia.
        </p>
        <div className="flex flex-row items-center justify-start gap-4 h-18">
          <CircularButton text={"Partner with us"} />
        </div>
      </section>
    </main>
  );
};

export default Banner;
