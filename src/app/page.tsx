"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import Form from "@/components/Form";
import VideoSlider from "@/components/Videos";
import About from "@/components/about";
import Clients from "../components/Clients";
import Gallery from "../components/Gallery";
import Landing from "../components/Landing";
import Photos from "../components/Photos";


export default function Home() {
  return (
    <div className="  realtive">
      <div className="fixed inset-0 -z-10  bg-black ">
        <div className="opacity-30">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 bg-purple-400"
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
      </div>
      <Landing />
      <About />
      <Clients />
      <VideoSlider />
      <Photos />
      <Gallery />
      <AutoScrollingTestimonialCarousel />
      <Form />
    </div>
  );
}
