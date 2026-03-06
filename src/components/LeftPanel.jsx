export default function LeftPanel({ activeSection }) {

  return (
    <div className="left-panel">

      <img
        src="/images/profile.jpeg"
        alt="profile"
        className="profile-img"
      />

      <h1>Akshay Raj</h1>

      <p className="tagline">
        M.Tech student Interested in machine learning, deep learning, and computer vision, with a deep curiosity for the mathematics that drives them.
      </p>

      <nav className="side-nav">

        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>

        <a href="#education" className={activeSection === "education" ? "active" : ""}>
          Education
        </a>

        <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
          Experience
        </a>

        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>

      </nav>

      <div className="socials">

      <a
        href="https://github.com/in/akshay-raj-m007"
        target="_blank"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/akshay-raj-ar"
        target="_blank"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/u/j8wk0N1Du5/"
        target="_blank"
      >
        LeetCode
      </a>

      <a href="mailto:akshayraj181199@gmail.com">
        Email
      </a>

    </div>

    </div>
  )
}