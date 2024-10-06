import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <HeroSection />
        <About />
        <Features />
        <FAQs />
        <Footer />
      </Router>
    </>
  )
}

export default App
