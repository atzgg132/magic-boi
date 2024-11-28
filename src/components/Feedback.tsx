'use client'

import { useCallback, useEffect, useState } from 'react'

const testimonials = [
  {
    name: "Prabhu",
    title: "Indian Film Actor",
    quote: "Vish was mesmerizing. I have never seen an entertainment like this. I wish him all the best!",
  },
  {
    name: "Priyanka Upendra",
    title: "Actress",
    quote: "Vish, I wish you good luck and you truly baffled me.",
  },
  {
    name: "Puneeth Rajkumar",
    title: "Indian Film Actor",
    quote: "A fun filled experience, that we must all try.",
  },
  {
    name: "K. Ashok Prabhu",
    title: "Founder, Director & CEO | Value Point Techsol",
    quote: "This is the second time we engaged with Vish. He literally grabbed and held the attention of 500 + Guests",
  },
  {
    name: "Manoj Vellakkat",
    title: "Head – New Business & Operations | NDVOR",
    quote: "Your performance was spectacular.",
  },
  {
    name: "Pranay Chulet",
    title: "CEO, Quikr",
    quote: "OMG, He freaked me out. I don't know how he did that!",
  },
  {
    name: "Kirti Mehta",
    title: "Unishire",
    quote: "His act added that extra wow factor to the marriage. Guests have been talking about him days after the Wedding.",
  },
  {
    name: "Rostow Ravanan",
    title: "CEO, Managing Director, Mindtree",
    quote: "I book him for every event and every time a client visits me. This is one of a kind act",
  },
]

export default function AutoScrollingTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextTestimonial = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }, [isTransitioning])

  const prevTestimonial = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }, [isTransitioning])

  useEffect(() => {
    const transitionEndTimer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this to the CSS transition duration

    return () => clearTimeout(transitionEndTimer)
  }, [currentIndex])

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      nextTestimonial()
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(autoScrollTimer)
  }, [nextTestimonial])

  return (
    <section className="pb-16" id="feedback">
      <div className="container mx-auto px-10">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="heading pb-10">Client Testimonials</h2>
          <div className="relative bg-gray-900 border-gray-700 shadow-lg rounded-lg  ">
            {/* Arrow Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-[-24px] top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 "
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Cards */}
            <div className="relative h-[290px]  overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <TestimonialContent testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

function TestimonialContent({ testimonial }: { testimonial: any }) {
  return (
    <div className="flex flex-col items-center justify-between p-4 md:p-8 h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12 mb-6 text-blue-500 opacity-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-6 italic flex-grow flex items-center">
        "{testimonial.quote}"
      </blockquote>
      <footer className="text-center mt-auto">
        <cite className="font-medium text-white text-lg not-italic">{testimonial.name}</cite>
        <p className="text-sm text-gray-400 mt-1">{testimonial.title}</p>
      </footer>
    </div>
  )
}