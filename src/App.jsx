
import './App.css'
import Terminal from './Terminal'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Oluwaseun Oloruntoba<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero" id="home">
        <div className="hero-content">
          <p className="intro">
            HELLO, I'M OLUWASEUN OLORUNTOBA
          </p>

          <h1>
            I build modern
            <span> digital experiences.</span>
          </h1>

          <p className="description">
            I'm a frontend developer passionate about
            building beautiful, responsive and
            user-friendly websites using modern
            web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <Terminal />
      </main>

      {/* About Section */}
      <section className="about" id="about">
        <p className="intro">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p>
          I'm Oluwaseun, an aspiring frontend developer
          with a background in Business Administration.
          I'm currently developing my skills in modern
          frontend technologies and building practical
          projects that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <p className="intro">MY RECENT WORK</p>

        <h2>Featured Projects</h2>

        <p className="projects-description">
          Here are some of the projects I've been
          working on as I develop my frontend skills.
        </p>

        <div className="project-container">

          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Bookkeeping App</h3>
            <p>
              A simple bookkeeping application that helps
              users manage income, expenses and financial
              records.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>FashionGO</h3>
            <p>
              A modern fashion website showcasing clothing,
              accessories and fashion collections.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>API Applications</h3>
            <p>
              Interactive applications that retrieve and
              display information from external APIs.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>API</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <p className="intro">MY TECH STACK</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-description">
          Tools and technologies I'm learning and using
          to build modern web applications.
        </p>

        <div className="skills-container">

          <div className="skill-card">
            <span>01</span>
            <h3>HTML5</h3>
            <p>Web Structure</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>CSS3</h3>
            <p>Web Styling</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>JavaScript</h3>
            <p>Web Interactivity</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>Tailwind CSS</h3>
            <p>Utility-First Styling</p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <p className="intro">MY JOURNEY</p>

        <h2>Experience & Learning</h2>

        <p className="experience-description">
          My professional background and continuous
          journey into frontend development.
        </p>

        <div className="experience-container">

          <div className="experience-card">
            <span className="experience-date">
              CURRENT
            </span>

            <h3>Frontend Development Training</h3>

            <p className="experience-role">
              Frontend Developer
            </p>

            <p>
              Learning modern frontend technologies,
              building responsive interfaces and
              developing practical React applications.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="experience-card">
            <span className="experience-date">
              MAY 2023 – APRIL 2026
            </span>

            <h3>Pleasant Inn</h3>

            <p className="experience-role">
              Hotel Management
            </p>

            <p>
              Gained professional experience in
              administration, operations and business
              management.
            </p>
          </div>

          <div className="experience-card">
            <span className="experience-date">
              AUGUST 2021 – MAY 2023
            </span>

            <h3>Dangote Refinery</h3>

            <p className="experience-role">
              Deputy Stores Officer
            </p>

            <p>
              Developed experience in stores operations,
              administration and organisational processes.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <p className="intro">LET'S CONNECT</p>

        <h2>Let's Build Something Together</h2>

        <p>
          I'm open to opportunities, collaborations and
          interesting projects. Feel free to reach out.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:tobaseun@gmail.com"
            className="btn-primary"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/tobaseun93"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>

        <p className="contact-email">
          tobaseun@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} Oluwaseun Oloruntoba.
          Built with React.
        </p>
      </footer>

    </div>
  )
}

export default App
