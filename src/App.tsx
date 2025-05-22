import Footer from './components/Footer'
import NavBar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import LogoSection from './sections/LogoSection'
import ShowcaseSection from './sections/ShowcaseSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <About />
    <Contact />
    <Footer />
    </>

  )
}

export default App