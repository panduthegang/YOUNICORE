import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#050404] select-none text-[#FAF6F0] flex flex-col">
      <Hero />
      <Manifesto />
      <Footer />
    </main>
  )
}

export default App
