"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

// You'll need to install these packages:
// npm install react-slick slick-carousel

// Don't forget to import the CSS files in your global CSS or page:
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const videos = [
    { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up" },
    { id: "9bZkp7q19f0", title: "PSY - GANGNAM STYLE" },
    { id: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito ft. Daddy Yankee" },
    { id: "OPf0YbXqDm0", title: "Mark Ronson - Uptown Funk ft. Bruno Mars" },
    { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You" },
]

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <button
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
            onClick={onClick}
        >
            <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <button
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
            onClick={onClick}
        >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
    )
}

export default function Component() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <Slider {...settings}>
                {videos.map((video) => (
                    <div key={video.id} className="px-2">
                        <div className="relative pb-[56.25%]">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute left-0 top-0 h-full w-full rounded-lg"
                            />
                        </div>
                        <h2 className="mt-4 text-center text-lg font-semibold">{video.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    )
}