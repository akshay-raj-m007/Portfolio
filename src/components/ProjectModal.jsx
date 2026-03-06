import { useState } from "react"

export default function ProjectModal({ project, close }) {

  const [index, setIndex] = useState(0)

  if (!project) return null

  const total = project.images.length

  const next = () => {

    if (total <= 1) return

    setIndex((prev) => (prev + 1) % total)
  }

  const prev = () => {

    if (total <= 1) return

    setIndex((prev) => (prev - 1 + total) % total)
  }

  return (

    <div className="modal-bg" onClick={close}>

      <div className="modal" onClick={(e)=>e.stopPropagation()}>

        <h2>{project.title}</h2>

        <p>{project.details}</p>

        <div className="carousel">

        <button onClick={prev}>◀</button>

        <div className="carousel-image-container">
            <img
            src={project.images[index]}
            alt="project"
            />
        </div>

        <button onClick={next}>▶</button>

        </div>
        <a href={project.github} target="_blank">
          View Repository
        </a>

      </div>

    </div>
  )
}