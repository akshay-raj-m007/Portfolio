import { useState } from "react"
import projects from "../data/projects.js"
import ProjectCard from "../components/Education"
import ProjectModal from "../components/Experience"
import Hero from "../components/LeftPanel"
import ResumeSection from "../components/Projects"

export default function Home() {

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>

      <Hero />

      <section id="projects">

        

        <h2>Projects</h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}

        </div>

      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <section id="contact">

        <h2>Contact</h2>

        <p>
          GitHub:
          <a href="https://github.com/akshay-raj-m007/ML-Classification"> GitHub</a>
        </p>

        <p>
          LinkedIn:
          <a href="https://linkedin.com/in/yourusername"> LinkedIn</a>
        </p>

        <p>Email: akshay@gmail.com</p>

      </section>

    </div>
  )
}