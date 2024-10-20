"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

import landing from "@/assets/landing.jpg";

export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const cursor = document.getElementById("custom-cursor");
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      cursor.style.transform = `translate(${moveX / 25}px, ${moveY / 25}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        id="custom-cursor"
        className="fixed w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
      />

      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold">VISH</h1>{" "}
        {/* Vish is still in the nav */}
        <div className="flex space-x-6">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Gallery</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative h-screen flex items-center justify-center"
      >
        <Image
          src={landing}
          alt="Mentalist Vish"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 landing-image"
          style={{ filter: "brightness(50%)" }} // Slightly dimmed background for better text contrast
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center uppercase tracking-widest mt-40 z-10 mix-blend-difference"
        >
          <h1 className="text-7xl md:text-9xl font-extrabold">
            Mentalist <span className="text-purple-500">Vish</span>{" "}
            {/* Main focus */}
          </h1>
          <p className="text-3xl md:text-4xl mt-4 text-gray-300">
            Explore the Mindscape {/* Supporting tagline */}
          </p>
        </motion.div>
      </motion.div>

      <section className="relative bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-4xl font-bold mb-8">
              Unleash Your Imagination
            </h3>
            <p className="text-xl mb-12">
              Step into the mystical world of Mentalist Vish, where the
              impossible becomes reality.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Begin Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold">VISH</h4>{" "}
              {/* Name repeated for consistency */}
              <p className="mt-2">Mentalist &amp; Master of Illusion</p>{" "}
              {/* Tagline in footer */}
            </div>
            <div className="flex space-x-6">
              <Instagram className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Mentalist Vish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
