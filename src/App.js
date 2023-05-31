
import Header from './components/Header'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import '../src/App.css'
import Teste from './components/teste'

export default function App() {
  return (
    <main>
    <div>
      <Header/>
      <FeaturesSection/>
      <AboutUs/>
      <TestimonialsSection/>
      <FaqSection/>
      <Teste/>
      <Contact/>
      <Footer/>
    </div>
    </main>
  )
}