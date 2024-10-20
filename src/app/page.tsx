"use client";

import AutoScrollingTestimonialCarousel from "@/components/Feedback";
import VideosComponent from "@/components/Videos";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <AutoScrollingTestimonialCarousel />
      <VideosComponent />
      <Clients />
    </div>
  );
}
