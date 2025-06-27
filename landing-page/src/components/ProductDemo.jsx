import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayIcon, CodeBracketIcon, DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('desktop')
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const demos = {
    desktop: {
      title: "Desktop Dashboard",
      description: "Powerful analytics interface with customizable widgets and real-time data.",
      content: (
        <div className="relative mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-gray-800 border-[14px] max-w-4xl">
          <div className="h-8 bg-gray-800 flex items-center px-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <img 
            src="https://placehold.co/800x500/1a1a1a/cccccc?text=Desktop+Dashboard" 
            alt="Desktop view" 
            className="w-full h-auto"
          />
        </div>
      )
    },
    mobile: {
      title: "Mobile App",
      description: "Full functionality optimized for on-the-go access with intuitive gestures.",
      content: (
        <div className="relative mx-auto bg-gray-900 rounded-[40px] overflow-hidden shadow-2xl border-gray-800 border-[14px] w-[300px]">
          <div className="h-12 bg-gray-800 flex items-center justify-center relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-1 rounded-full bg-gray-600"></div>
            <div className="w-8 h-5 rounded-full bg-gray-900"></div>
          </div>
          <img 
            src="https://placehold.co/300x600/1a1a1a/cccccc?text=Mobile+App" 
            alt="Mobile view" 
            className="w-full h-auto"
          />
          <div className="h-2 bg-gray-800"></div>
        </div>
      )
    },
    tablet: {
      title: "Tablet View",
      description: "Perfect balance between power and portability with adaptive layouts.",
      content: (
        <div className="relative mx-auto bg-gray-900 rounded-[20px] overflow-hidden shadow-2xl border-gray-800 border-[14px] w-[500px]">
          <div className="h-8 bg-gray-800 flex items-center px-3">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>
          <img 
            src="https://placehold.co/500x700/1a1a1a/cccccc?text=Tablet+View" 
            alt="Tablet view" 
            className="w-full h-auto"
          />
        </div>
      )
    }
  }

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our platform works across all your devices
          </p>
        </div>

        {/* Demo tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {Object.keys(demos).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab === 'desktop' && <ComputerDesktopIcon className="w-5 h-5 mr-2" />}
                {tab === 'mobile' && <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />}
                {tab === 'tablet' && <DeviceTabletIcon className="w-5 h-5 mr-2" />}
                {demos[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Demo content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {demos[activeTab].content}
              <p className="mt-6 text-center text-gray-600 max-w-xl">
                {demos[activeTab].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Video trigger */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch full product tour (2 minutes)
            </button>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe width="560" height="315" 
                className="w-full h-full"
                src="https://www.youtube.com/embed/LvKVXNmOqGw?si=8Ws5bZur9PN4hFWF"
                title="Product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Add to your icons imports
import { XMarkIcon } from '@heroicons/react/24/outline'