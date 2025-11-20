// import React from "react";
// import ExploreSlider from "./ExploreSlider";
// import Image from "next/image";

// const Explore = () => {
//   return (
//     <div className="max-w-7xl mx-auto py-20 ">
//       <div className="max-w-3xl mx-auto gap-6 flex flex-col">
//         <h3 className="text-2xl font-bold">Our Global Footprint</h3>
//         <p className="font-light text-lg">
//           Aylux Pvt Ltd operates with a strategic, international presence,
//           enabling us to provide seamless logistics, local expertise, and
//           continuous supply.
//         </p>
//       </div>
//       <div className="border w-full py-10 relative h-[70dvh]">
//         <h5 className="text-3xl font-bold">
//           Our key operational hubs include:
//         </h5>
//         <ul className="list-disc list-inside mt-4">
//           <li className="text-lg">
//             Australia <span>(Headquarters) </span>
//           </li>
//           <li className="text-lg">Sri Lanka</li>
//           <li className="text-lg">Malaysia</li>
//           <li className="text-lg">USA</li>
//           <li className="text-lg">Canada</li>
//         </ul>
//         <div className="border mx-auto absolute inset-0 w-full h-full flex items-center justify-center">
//           <Image
//             src="/images/about/globe.jpg"
//             alt="map"
//             className="object-fill"
//             width={400}
//             height={400}
//           />
//         </div>
//         <p className="max-w-lg border ml-auto  ">
//           This network ensures we are local on a global scale, providing
//           boots-on-the-ground support and cultural understanding in every market
//           we serve.
//         </p>
//       </div>
//       <ExploreSlider />
//     </div>
//   );
// };

// export default Explore;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExploreSlider from "./ExploreSlider";

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
              quality={95}
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
