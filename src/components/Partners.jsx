import Image from "next/image";
import Link from "next/link";
import React from "react";

const Partners = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 items-center justify-center px-8 md:px-16 py-20">
      <h3 className="text-2xl font-bold">PARTNERS CONTRIBUTING WITH US</h3>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full">
        <Link
          href="https://www.jaydsolutions.com/"
          target="_blank"
          className="relaive flex items-center justify-center hover:shadow shadow-cyan-300 p-1 bg-white rounded-lg transition-all duration-300"
        >
          <Image
            src="/images/home/partnerLogo.jpg"
            alt="partner"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Partners;
