export default function Experience() {

  const experiences = [
    {
      company: "Keyvalue Software Systems",
      role: "Test Engineer",
      duration: "July 2021 – May 2024",
      points: [
        "Performed manual testing on both mobile and web applications to validate functionality and user workflows.",
        "Prepared detailed test documentation including test cases, bug reports, and performance reports within an Agile development environment.",
        "Implemented UI automation to automate repetitive frontend testing flows.",
        "Built API automation pipelines using Jest to validate payment-based application workflows.",
        "Tracked defects using Jira and collaborated closely with development teams to analyze and resolve issues."
      ]
    }
  ]

  return (

    <section id="experience">

      <h2>Experience</h2>

      {experiences.map((exp, index) => (

        <div key={index} className="exp-item">

          <h3>{exp.company}</h3>

          <p className="exp-role">{exp.role}</p>

          <span className="exp-duration">{exp.duration}</span>

          <ul className="exp-points">

            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}

          </ul>

        </div>

      ))}

    </section>

  )
}