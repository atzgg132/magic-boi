"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import Landing from "../components/Landing";
import VideoSlider from "@/components/Videos";
import Clients from "../components/Clients";
import Photos from "../components/Photos";

export default function Home() {
  return (
    <>
      <AutoScrollingTestimonialCarousel />
      <Photos />
      <VideoSlider />
      <Clients />
    </div>
  );
}
