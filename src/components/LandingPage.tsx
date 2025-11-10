import Hero from './sections/Hero'
import Features from './sections/Features'
import KeyCapabilities from './sections/KeyCapabilities'
import CodeExamples from './sections/CodeExamples'
import Benefits from './sections/Benefits'
import QuickStart from './sections/QuickStart'
import Footer from './sections/Footer'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <KeyCapabilities />
      <CodeExamples />
      <Benefits />
      <QuickStart />
      <Footer />
    </div>
  )
}

export default LandingPage

