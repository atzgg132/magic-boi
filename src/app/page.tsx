"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import Photos from "../components/Photos";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <AutoScrollingTestimonialCarousel />
      <Photos />
      <Clients />
    </>
  );
}
