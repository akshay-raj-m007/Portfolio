import { useEffect, useState } from "react"
import LeftPanel from "./components/LeftPanel"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import "./styles/theme.css"

function App() {

  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: document.querySelector(".content"),
        threshold: 0.4
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  return (

    <div className="layout">

      <LeftPanel activeSection={activeSection} />

      <div className="content">

        <About />
        <Education />
        <Experience />
        <Projects />

      </div>

    </div>
  )
}

export default App