import Hero from './components/Hero'
import Header from './components/Header'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import ProductDemo from './components/ProductDemo'
import Pricing from './components/Pricing'
import Faq from './components/faq'
import Cat from './components/Cat'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <ProductDemo />
      <Pricing />
      <Faq />
      < Cat />
      < Footer />

      {/* Add other sections here */}
    </div>
  )
}

export default App