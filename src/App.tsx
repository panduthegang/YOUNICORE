import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Work from './components/Work'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#050404] select-none text-[#FAF6F0] flex flex-col">
      <Navbar />
      <Hero />
      <Manifesto />
      <Services />
      <Work />
      <Team />
      <Footer />
    </main>
  )
}

export default App
