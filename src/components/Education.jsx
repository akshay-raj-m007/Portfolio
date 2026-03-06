export default function Education() {

  const education = [

    {
      institute: "Indian Institute of Technology Tirupati",
      degree: "M.Tech Data Science & AI",
      score: "CGPA: 9.29",
      year: "2025 – 2027"
    },

    {
      institute: "Govt Engineering College Barton Hill",
      degree: "B.Tech Electronics and Communication",
      score: "CGPA: 9.22",
      year: "2017 – 2021"
    },

    {
      institute: "Rahmaniyya Higher Secondary School",
      degree: "Plus Two (HSE)",
      score: "Percentage: 97.9%",
      year: "2015 – 2017"
    },

    {
      institute: "Technical Higher Secondary School Vazhakkad",
      degree: "SSLC",
      score: "Percentage: 97.5%",
      year: "2015"
    }

  ]

  return (

    <section id="education">

      <h2>Education</h2>

      {education.map((item, index) => (

        <div key={index} className="edu-item">

          <h3>{item.institute}</h3>

          <p>{item.degree}</p>

          <p className="edu-score">{item.score}</p>

          <span className="edu-year">{item.year}</span>

        </div>

      ))}

    </section>

  )
}