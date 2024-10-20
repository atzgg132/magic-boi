"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import photos1 from "@/assets/photos1.jpg";
import photos2 from "@/assets/photos2.jpg";
import photos3 from "@/assets/photos3.jpg";

const moments = [
  {
    title: "PARTY",
    image: photos1,
    description: "Experience unforgettable party moments",
  },
  {
    title: "CORPORATE",
    image: photos2,
    description: "Create lasting impressions at corporate events",
  },
  {
    title: "WEDDING",
    image: photos3,
    description: "Cherish beautiful wedding memories",
  },
];

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function UnforgettableMoments() {
  return (
    <div className="relative w-full bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unforgettable <span className="text-purple-500">Moments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <TypewriterEffect text="Immerse yourself in the promise of an extraordinary, captivating experience, destined to linger as a cherished memory" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 p-1 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="bg-zinc-900 rounded-xl p-0">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-48 object-cover"
                    width={600}
                    height={300}
                    placeholder="blur"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {moment.title}
                    </h3>
                    <p className="text-gray-400">{moment.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            KNOW MORE
          </Button>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
