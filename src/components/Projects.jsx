import { useState } from "react"
import projects from "../data/projects"
import ProjectModal from "./ProjectModal"

export default function Projects(){

  const [selected,setSelected] = useState(null)

  return(

    <section id="projects">

      <h2>Projects</h2>

      {projects.map((p,i)=>{

        const tags = p.tags.slice(0,7)

        return(

          <div
            key={i}
            className="project-card"
            onClick={()=>setSelected(p)}
          >

            <h3>{p.title}</h3>

            <p>{p.description}</p>

            <div className="project-tags">

              {tags.map((tag,idx)=>(
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}

            </div>

          </div>

        )
      })}

      <ProjectModal
        project={selected}
        close={()=>setSelected(null)}
      />

    </section>
  )
}