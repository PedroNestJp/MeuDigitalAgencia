
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CTASection from './components/CTASection'


export default function App() {
  return (
    <main>
    <div>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <CTASection/>
      <Contact/>
      <Footer/>
    </div>
    </main>
  )
}