'use client'

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white h-34 flex items-center justify-center overflow-hidden py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between w-full">
        <div className="relative">
          <Image src="/Logo.jpg" alt="logo" className="object-fill" width="180" height="100"/>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 text-sm">
          <div className="uppercase">Home</div>
          <div className="uppercase">About</div>
          <div className="uppercase">Services</div>
          <div className="uppercase">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
