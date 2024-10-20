"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import VideoSlider from "@/components/Videos";
import About from "@/components/about";
import Clients from "../components/Clients";
import Photos from "../components/Photos";

export default function Home() {
  return (
    <div className="bg-black  realtive">
      <div className="fixed inset-0 z-0 opacity-30">
        {[...Array(200)].map((_, i) => (
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
      <About />
      <Clients />
      <VideoSlider />
      <Photos />
      <AutoScrollingTestimonialCarousel />
    </div>
  );
}
