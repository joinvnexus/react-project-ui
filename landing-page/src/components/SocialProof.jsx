import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "This product increased our conversion rate by 42% in just 30 days. Absolutely game-changing!",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Acme Inc",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "The easiest onboarding we've ever experienced. Customer support is phenomenal.",
      name: "Michael Chen",
      role: "CTO",
      company: "StartUp Labs",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "We saw ROI within the first week. The analytics dashboard alone is worth the price.",
      name: "Emma Rodriguez",
      role: "Growth Lead",
      company: "NextGen Corp",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]

const clients = [
  { 
    name: "Shopify", 
    logo: "https://cdn.simpleicons.org/shopify/7AB55C" 
  },
  { 
    name: "Slack", 
    logo: "https://cdn.simpleicons.org/slack/4A154B" 
  },
  { 
    name: "Microsoft", 
    logo: "https://cdn.simpleicons.org/microsoft/5E5E5E" 
  },
  { 
    name: "Airbnb", 
    logo: "https://cdn.simpleicons.org/airbnb/FF5A5F" 
  },
  { 
    name: "Spotify", 
    logo: "https://cdn.simpleicons.org/spotify/1DB954" 
  }
]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        )
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses accelerating their growth with our platform
          </p>
        </div>

        {/* Client logos marquee */}
        <div className="relative overflow-hidden py-8 mb-16">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="inline-flex items-center mx-8">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-80 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center max-w-2xl">
                  {/* Rating stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg font-medium text-gray-900 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}