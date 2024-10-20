"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const videos = [
    { id: "hV60L12g-8Q", title: "TEDxCMRIT" },
    { id: "wWSWEkg-nzc", title: "PSY - GANGNAM STYLE" },
    { id: "2yaL6mKtsdI", title: "MOST SOUGHT AFTER CORPORATE ENTERTAINER" },
]

export default function VideoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === videos.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="relative mx-auto max-w-5xl px-4 py-8 ">
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 text-center">VIDEOS</div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <div className="absolute inset-0">
                    <iframe
                        src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
                        title={videos[currentIndex].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold text-white">
                {videos[currentIndex].title}
            </h2>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={goToPrevious}
                    className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    aria-label="Previous video"
                >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <div className="mt-4 flex justify-center space-x-2">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-gray-300" : "bg-gray-600"
                                }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={goToNext}
                    className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    aria-label="Next video"
                >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
            </div>
        </div>
    )
}