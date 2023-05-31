
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import AboutUs from './components/AboutUs'
import '../src/App.css'


export default function App() {
  return (
    <main>
    <div>
      <Header/>
      <FeaturesSection/>
      <AboutUs/>
      <TestimonialsSection/>
      <FaqSection/>
      <CTASection/>
      <HeroSection/>
      <Contact/>
      <Footer/>
    </div>
    </main>
  )
}