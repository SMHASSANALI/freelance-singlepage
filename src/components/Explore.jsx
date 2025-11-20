"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExploreSlider from "./ExploreSlider";
import { MdWhatsapp } from "react-icons/md";

const Explore = () => {
  const locations = [
    { name: "Australia", label: "Headquarters", top: "55%", left: "72%" },
    { name: "Sri Lanka", top: "62%", left: "62%" },
    { name: "Malaysia", top: "58%", left: "68%" },
    { name: "USA", top: "38%", left: "20%" },
    { name: "Canada", top: "32%", left: "24%" },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Global Footprint
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Aylux operates with strategic presence across key markets — ensuring{" "}
            <span className="text-cyan-600 font-semibold">local expertise</span>{" "}
            on a{" "}
            <span className="text-cyan-600 font-semibold">global scale</span>.
          </p>
        </motion.div>

        {/* Map + Locations */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-cyan-900 to-blue-900 mb-20">
          {/* Background Map - Close-up on Australia & Asia-Pacific */}
          <div className="absolute inset-0">
            <Image
              src="/images/about/globe.jpg"
              alt="Aylux Global Network - Australia & Asia Pacific Focus"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-teal-500 via-cyan-600 to-transparent" />
          </div>

          {/* Overlay Text */}
          <div className="relative z-10 p-12 lg:p-20 text-white">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">
              Always Close to Our Partners
            </h3>
            <p className="text-lg lg:text-xl max-w-2xl leading-relaxed opacity-95">
              Our network of operational hubs ensures boots-on-the-ground
              support, cultural understanding, and real-time responsiveness — no
              matter where in the world you are.
            </p>
            <div className="mt-4 w-fit">
              <div className="flex flex-row items-center justify-center">
                <span className="bg-white rounded-full p-1.5 mr-2 shadow-lg flex items-center justify-center">
                  <MdWhatsapp className="w-8 h-8 text-green-500" />
                </span>
                <div>
                  <p className="text-lg lg:text-xl font-semibold">
                    +61 400 123 456
                  </p>
                  <p className="">24/7 Connectivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Hubs List - Clean & Modern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20"
        >
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-cyan-100 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-cyan-500 rounded-full" />
              </div>
              <p className="font-semibold text-gray-800">{loc.name}</p>
              {loc.label && (
                <p className="text-sm text-cyan-600 font-medium mt-1">
                  {loc.label}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* ExploreSlider - Perfectly Integrated */}
        <ExploreSlider />
      </div>

      {/* Custom Animation */}
      <style jsx global>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Explore;
