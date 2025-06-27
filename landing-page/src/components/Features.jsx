import { BoltIcon, ChartBarIcon, ServerIcon, ArrowsPointingOutIcon, CodeBracketIcon, LifebuoyIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'AI-Powered Analytics',
    description: 'Get real-time insights and predictive metrics to optimize your campaigns automatically.',
    icon: BoltIcon,
    highlight: true
  },
  {
    name: 'Performance Dashboard',
    description: 'Beautiful, customizable dashboards that show exactly what matters to your business.',
    icon: ChartBarIcon
  },
  {
    name: 'Seamless Integration',
    description: 'Connect with your existing tools in minutes with our pre-built connectors.',
    icon: ServerIcon
  },
  {
    name: 'Scalable Infrastructure',
    description: 'Handles millions of requests without breaking a sweat. We scale as you grow.',
    icon: ArrowsPointingOutIcon
  },
  {
    name: 'Developer Friendly',
    description: 'Full API access and webhooks for custom implementations.',
    icon: CodeBracketIcon
  },
  {
    name: '24/7 Priority Support',
    description: 'Dedicated experts ready to help whenever you need it.',
    icon: LifebuoyIcon
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed to help you convert more visitors, automate workflows, and make data-driven decisions.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow ${
                feature.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                  Popular
                </div>
              )}
              <div className="flex items-center mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                  feature.highlight ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className={`ml-4 text-lg font-bold ${
                  feature.highlight ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {feature.name}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
              {feature.highlight && (
                <div className="mt-6">
                  <a href="#cta" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                    Learn more <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-blue-100 mt-2">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-blue-100 mt-2">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">5min</div>
              <div className="text-blue-100 mt-2">Setup</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">10K+</div>
              <div className="text-blue-100 mt-2">Customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}