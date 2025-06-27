import { useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const plans = {
    monthly: [
      {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for trying out basic features',
        cta: 'Get Started',
        featured: false,
        features: [
          { name: 'Basic Analytics', included: true },
          { name: 'Up to 3 Projects', included: true },
          { name: 'Email Support', included: true },
          { name: 'API Access', included: false },
          { name: 'Priority Support', included: false }
        ]
      },
      {
        name: 'Professional',
        price: '$29',
        description: 'For growing businesses and teams',
        cta: 'Start Free Trial',
        featured: true,
        features: [
          { name: 'Advanced Analytics', included: true },
          { name: 'Unlimited Projects', included: true },
          { name: '24/7 Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Priority Support', included: false }
        ]
      },
      {
        name: 'Enterprise',
        price: '$99',
        description: 'For organizations with custom needs',
        cta: 'Contact Sales',
        featured: false,
        features: [
          { name: 'Advanced Analytics', included: true },
          { name: 'Unlimited Projects', included: true },
          { name: '24/7 Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Priority Support', included: true }
        ]
      }
    ],
    annual: [
      {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for trying out basic features',
        cta: 'Get Started',
        featured: false,
        features: [
          { name: 'Basic Analytics', included: true },
          { name: 'Up to 3 Projects', included: true },
          { name: 'Email Support', included: true },
          { name: 'API Access', included: false },
          { name: 'Priority Support', included: false }
        ]
      },
      {
        name: 'Professional',
        price: '$24',
        description: 'For growing businesses and teams',
        cta: 'Start Free Trial',
        featured: true,
        features: [
          { name: 'Advanced Analytics', included: true },
          { name: 'Unlimited Projects', included: true },
          { name: '24/7 Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Priority Support', included: false }
        ]
      },
      {
        name: 'Enterprise',
        price: '$83',
        description: 'For organizations with custom needs',
        cta: 'Contact Sales',
        featured: false,
        features: [
          { name: 'Advanced Analytics', included: true },
          { name: 'Unlimited Projects', included: true },
          { name: '24/7 Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Priority Support', included: true }
        ]
      }
    ]
  }

  const features = [
    'Basic Analytics',
    'Advanced Analytics',
    'Up to 3 Projects',
    'Unlimited Projects',
    'Email Support',
    '24/7 Support',
    'API Access',
    'Full API Access',
    'Priority Support'
  ]

  const currentPlans = plans[billingCycle]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Start for free, upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billingCycle === 'annual'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Annual billing (20% off)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border-2 ${
                plan.featured
                  ? 'border-blue-500 shadow-xl'
                  : 'border-gray-200'
              }`}
            >
              <div className={`p-6 ${
                plan.featured ? 'bg-blue-50' : 'bg-white'
              } rounded-t-2xl`}>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-600">
                    {plan.name === 'Starter' ? '' : '/mo'}
                  </span>
                  {billingCycle === 'annual' && plan.name !== 'Starter' && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Save 20%
                    </span>
                  )}
                </div>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.featured
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="border-t border-gray-200 p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <span className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0">×</span>
                      )}
                      <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
            Detailed feature comparison
          </h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                {currentPlans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ${
                      plan.featured ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {features.map((feature) => (
                <tr
                  key={feature}
                  onMouseEnter={() => setHoveredFeature(feature)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={hoveredFeature === feature ? 'bg-gray-50' : ''}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    {feature}
                    <button className="ml-1 text-gray-400 hover:text-gray-500">
                      <QuestionMarkCircleIcon className="w-4 h-4" />
                    </button>
                  </td>
                  {currentPlans.map((plan) => {
                    const planFeature = plan.features.find(f => f.name === feature)
                    return (
                      <td
                        key={`${plan.name}-${feature}`}
                        className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                      >
                        {planFeature ? (
                          planFeature.included ? (
                            <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">×</span>
                          )
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Check out our <a href="#faq" className="text-blue-600 hover:underline">FAQ</a> or contact our sales team.
          </p>
        </div>
      </div>
    </section>
  )
}