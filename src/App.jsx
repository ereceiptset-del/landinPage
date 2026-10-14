import { MotionConfig } from 'motion/react'
import { ContactPrefillProvider } from './hooks/contactPrefill.jsx'
import Header from './components/sections/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import LogoStrip from './components/sections/LogoStrip.jsx'
import Services from './components/sections/Services.jsx'
import Solutions from './components/sections/Solutions.jsx'
import Portfolio from './components/sections/Portfolio.jsx'
import Metrics from './components/sections/Metrics.jsx'
import Technologies from './components/sections/Technologies.jsx'
import WhyUs from './components/sections/WhyUs.jsx'
import Industries from './components/sections/Industries.jsx'
import Process from './components/sections/Process.jsx'
import CtaBanner from './components/sections/CtaBanner.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Faq from './components/sections/Faq.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/sections/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactPrefillProvider>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <LogoStrip />
          <Services />
          <Solutions />
          <Portfolio />
          <Metrics />
          <Technologies />
          <WhyUs />
          <Industries />
          <Process />
          <CtaBanner />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </ContactPrefillProvider>
    </MotionConfig>
  )
}
