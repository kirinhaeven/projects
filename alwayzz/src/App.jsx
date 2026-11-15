import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Tagline from './components/Tagline.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Work from './components/Work.jsx'
import Plans from './components/Plans.jsx'
import Team from './components/Team.jsx'
import Testimonial from './components/Testimonial.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustedBy />
        <Tagline />
        <Services />
        <Process />
        <Work />
        <Plans />
        <Team />
        <Testimonial />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
