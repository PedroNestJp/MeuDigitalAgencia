
import Header from './components/Header'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import '../src/App.css'
import TestmonialsClientes from './components/TestmonialsClientes'


export default function App() {



  return (
    <main>
    <div>
      <Header />
      <FeaturesSection />
      <AboutUs />
      <TestimonialsSection/>
      <FaqSection/>
      <TestmonialsClientes/>
      <Contact/>
      <Footer/>
    </div>
    </main>
  )
}