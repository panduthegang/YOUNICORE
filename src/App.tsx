import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Work from './components/Work'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Toggle scroll lock on document body during preloading
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isLoading])

  useEffect(() => {
    // Disable browser scroll restoration to prevent page jumps on refresh
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    // Only initialize smooth scroll after assets are preloaded
    if (isLoading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom cubic bezier curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true, // Modern touch gestures smooth scrolling
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Force scroll position to top instantly on load
    window.scrollTo(0, 0)
    lenis.scrollTo(0, { immediate: true })

    // Animation frame callback
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Register callback
    requestAnimationFrame(raf)

    // Cleanup scroll listener on unmount
    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <main className="min-h-screen bg-[#050404] select-none text-[#FAF6F0] flex flex-col relative">
      {/* Preloader loaded state */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Website Wrapper with premium curtain reveal */}
      <div 
        className={`w-full flex flex-col transition-all duration-[1200ms] ease-out origin-center ${
          isLoading 
            ? 'opacity-0 scale-95 pointer-events-none' 
            : 'opacity-100 scale-100 pointer-events-auto'
        }`}
      >
        <Navbar />
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <Team />
        <Footer />
      </div>
    </main>
  )
}

export default App
