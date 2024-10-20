"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";

import Landing from "../components/Landing";
import Photos from "../components/Photos";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Landing />
      <AutoScrollingTestimonialCarousel />
      <Photos />
      <Clients />
    </>
  );
}
