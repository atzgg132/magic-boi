"use client";

import Image from "next/image";

import accenture from "@/assets/accenture.png";
import deloitte from "@/assets/deloitte.png";
import hitachi from "@/assets/hitachi.png";
import ibm from "@/assets/ibm.png";
import itcLimited from "@/assets/itcLimited.png";
import mindtree from "@/assets/mindtree.svg";
import saintGobain from "@/assets/saintGobain.png";
import sutherland from "@/assets/sutherland.svg";
import taj from "@/assets/taj.png";
import tesco from "@/assets/tesco.png";

interface Logo {
  name: string;
  src: any;
  makeWhite?: boolean;
}

const logos: Logo[] = [
  { name: "Deloitte", src: deloitte },
  { name: "Hitachi", src: hitachi },
  { name: "Tesco", src: tesco },
  { name: "Saint Gobain", src: saintGobain },
  { name: "Accenture", src: accenture },
  { name: "Sutherland", src: sutherland, makeWhite: true },
  { name: "Mindtree", src: mindtree },
  { name: "IBM", src: ibm },
  { name: "ITC Limited", src: itcLimited },
  { name: "Taj", src: taj },
];

const Clients = () => {
  return (
    <div className="w-full overflow-hidden" id="clients">
      <div className="max-w-[95rem] mx-auto sm:px-6 lg:px-8">
        <div className="text-center md:mb-12 mb-6">
          <h2 className="heading">
            Esteemed Clients
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Trusted by industry leaders worldwide
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <div className="flex overflow-x-hidden">
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={50}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ease-in-out hover:scale-110 ${logo.makeWhite ? "filter-white" : ""
                      }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {logos.map((logo, index) => (
                <div
                  key={`logo-duplicate-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={50}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ease-in-out hover:scale-110 ${logo.makeWhite ? "filter-white" : ""
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .filter-white {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
};

export default Clients;
