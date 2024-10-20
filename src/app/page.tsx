"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import VideoSlider from "@/components/Videos";
import Clients from "../components/Clients";
import Photos from "../components/Photos";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <AutoScrollingTestimonialCarousel />
      <Photos />
      <VideoSlider />
      <Clients />
    </div>
  );
}
