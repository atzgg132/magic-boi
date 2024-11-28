"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const third = Math.floor(images.length / 3);

  const firstPart = images.slice(0, third + 1);
  const secondPart = images.slice(third + 1, 2 * third + 1);
  const thirdPart = images.slice(2 * third + 1);

  return (
    <div
      className={cn("h-[50rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-start max-w-[1200px] mx-auto gap-4 md:pb-40 px-10">
        <div className="grid gap-4 mx-auto">
          {firstPart.map((el, idx) => (
            <motion.div
              style={isLargeScreen ? { y: translateFirst } : {}}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="rounded-lg object-cover"
                height={500}
                width={375}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 mx-auto md:mt-0 ">
          {secondPart.map((el, idx) => (
            <motion.div
              style={isLargeScreen ? { y: translateSecond } : {}}
              key={"grid-2" + idx}
            >
              <Image
                src={el}
                className="rounded-lg object-cover"
                height={500}
                width={375}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 mx-auto ">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={isLargeScreen ? { y: translateThird } : {}}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="rounded-lg object-cover"
                height={500}
                width={375}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};