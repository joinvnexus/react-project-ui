import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                🚀 Just launched v2.0
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="block">Grow Your Business</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  With AI-Powered Tools
                </span>
              </h1>

              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Automate your marketing, increase conversions, and save 10+ hours weekly with our intelligent platform.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>

                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <PlayCircleIcon className="w-5 h-5" />
                  Watch Demo (2 min)
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10">
                <div className="flex items-center gap-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${i}`}
                        alt={`User ${i}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">10,000+</span> businesses trust us
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Mockup container */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
                {/* Place your screenshot/illustration here */}
                <img
                  src="https://placehold.co/800x600/f8fafc/64748b?text=Product+Dashboard"
                  alt="Product screenshot"
                  className="w-full h-auto"
                />
                
                {/* Floating element (example) */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">+42% conversions</p>
                      <p className="text-xs text-gray-500">Last 30 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}