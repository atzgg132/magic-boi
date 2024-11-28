"use client";
import img1 from "@/assets/img1.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";
import img18 from "@/assets/img18.jpg";
import img19 from "@/assets/img19.jpg";
import img2 from "@/assets/img2.jpg";
import img20 from "@/assets/img20.jpg";
import img21 from "@/assets/img21.jpg";
import img22 from "@/assets/img22.jpg";
import img23 from "@/assets/img23.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function ParallaxScrollDemo() {
    return (
        <>
            <ParallaxScroll images={images} />
        </>
    );
}

const images = [
    img2,
    img7,
    img3,
    img5,
    img4,
    img10,
    img8,
    img6,
    img9,
    img11,
    img17,
    img12,
    img15,
    img1,
    img20,
    img16,
    img19,
    img23,
    img18,
    img21,
    img14,
    img22,
    img13,
].map((img) => img.src); // Extract the `src` property
