import Navbar from "../layout/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Certifications from "../sections/Certifications"
import Contact from "../sections/Contact"
import Technologies from "../sections/Technologies"
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <Technologies/>
        <About/>
        <Projects/>
        <Certifications/>
        <Contact/> 
      </main>
    </div>
  )
}

export default App
