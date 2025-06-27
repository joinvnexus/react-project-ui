import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes! Our Starter plan is completely free forever with basic features. You can also try our Professional plan with a 14-day free trial (no credit card required)."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your paid subscription at any time and you'll retain access until the end of your billing period. No cancellation fees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe."
    },
    {
      question: "How does the free plan differ from paid plans?",
      answer: "The free plan includes basic functionality with some limitations (3 projects, email support). Paid plans unlock advanced features, unlimited projects, priority support, and API access."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we offer 30% discounts for registered non-profits and educational organizations. Please contact our sales team with proof of status to get your discount."
    },
    {
      question: "How do I get help if I'm stuck?",
      answer: "We offer 24/7 support on paid plans via live chat and email. Free plan users can access our knowledge base or community forums. Average response time is under 2 hours for paid users."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Can't find what you're looking for? <a href="#contact" className="text-blue-600 hover:underline">Contact our support team</a>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support channels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-3">
              Available 24/7 for paid plans
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
              Start chat →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
              <EnvelopeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-3">
              Typically responds within 2 hours
            </p>
            <a href="mailto:support@yourcompany.com" className="text-blue-600 hover:underline text-sm font-medium">
              Email us →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-3">
              Available for enterprise customers
            </p>
            <a href="tel:+18005551234" className="text-blue-600 hover:underline text-sm font-medium">
              Call us →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}