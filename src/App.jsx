import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Safa<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#activities" onClick={closeMenu}>Activities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <div className="status">
            <span></span>
            Available for learning & collaboration
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Safa <span>Akter</span>
          </h1>

          <h2>
            Computer Science &<br />
            <span>Engineering Student</span>
          </h2>

          <p className="hero-text">
            I enjoy creating modern, responsive and user-friendly
            web experiences while continuously learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>03+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>CSE</strong>
              <span>Student</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Learning</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">
            <div className="card-top">
              <span>01 / PROFILE</span>
              <span>✦</span>
            </div>

            <div className="profile-circle">
              SA
            </div>

            <h3>Safa Akter</h3>
            <p>Frontend Developer</p>

            <div className="profile-line"></div>

            <div className="profile-bottom">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="floating-badge badge-one">
            <span>◈</span> React
          </div>

          <div className="floating-badge badge-two">
            <span>✦</span> Creative
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <p>GET TO KNOW ME</p>
          </div>

          <h2>
            A little <span>about me.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="big-text">
              I am a CSE student who loves turning ideas into
              <span> clean digital experiences.</span>
            </p>

            <p>
              My interest is mainly focused on web development,
              software development and modern technology. I enjoy
              learning new tools and using them to build useful
              and attractive projects.
            </p>

            <p>
              I believe good design is not only about appearance.
              It should also be simple, responsive and easy to use.
            </p>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span>Name</span>
              <strong>Safa Akter</strong>
            </div>

            <div className="info-item">
              <span>Department</span>
              <strong>Computer Science & Engineering</strong>
            </div>

            <div className="info-item">
              <span>University</span>
              <strong>Southeast University</strong>
            </div>

            <div className="info-item">
              <span>Location</span>
              <strong>Dhaka, Bangladesh</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section dark-section">
        <div className="section-heading">
          <div>
            <span className="section-number">02</span>
            <p>MY JOURNEY</p>
          </div>

          <h2>
            Education <span>timeline.</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-year">PRESENT</div>

            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>01</span>
              <h3>B.Sc. in Computer Science & Engineering</h3>
              <h4>Southeast University</h4>
              <p>
                Currently pursuing my undergraduate degree and
                developing my knowledge in programming, software
                development and web technologies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023</div>

            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>02</span>
              <h3>Diploma in Engineering</h3>
              <h4>Diploma Education</h4>
              <p>
                Completed diploma-level engineering education
                before continuing my undergraduate studies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2019</div>

            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>03</span>
              <h3>Secondary School Certificate</h3>
              <h4>SSC</h4>
              <p>
                Successfully completed my secondary level education.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-heading">
          <div>
            <span className="section-number">03</span>
            <p>WHAT I WORK WITH</p>
          </div>

          <h2>
            My <span>skills.</span>
          </h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <span className="skill-number">01</span>
            <div className="skill-icon">HTML</div>
            <h3>HTML</h3>
            <p>Semantic and structured web pages.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <div className="skill-icon">CSS</div>
            <h3>CSS</h3>
            <p>Responsive and attractive interfaces.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web applications.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <div className="skill-icon">R</div>
            <h3>React</h3>
            <p>Component-based modern web applications.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <div className="skill-icon">C++</div>
            <h3>C++</h3>
            <p>Programming fundamentals and problem solving.</p>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <div className="skill-icon">G</div>
            <h3>Git & GitHub</h3>
            <p>Version control and project management.</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section dark-section">
        <div className="section-heading">
          <div>
            <span className="section-number">04</span>
            <p>SELECTED WORK</p>
          </div>

          <h2>
            Featured <span>projects.</span>
          </h2>
        </div>

        <div className="projects-grid">

          <div className="project-card featured">
            <div className="project-top">
              <span>01</span>
              <span>↗</span>
            </div>

            <div className="project-visual purple">
              <div className="visual-window">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-content">
              <p className="project-type">WEB APPLICATION</p>
              <h3>Lumora</h3>
              <p>
                A modern blogging platform designed for users to
                create, manage, search and interact with blog content.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>02</span>
              <span>↗</span>
            </div>

            <div className="project-visual blue">
              <div className="club-visual">
                <span>UNI</span>
                <strong>CLUB</strong>
              </div>
            </div>

            <div className="project-content">
              <p className="project-type">WEB PROJECT</p>
              <h3>University Club Portal</h3>
              <p>
                A university club platform for exploring clubs,
                events and student activities.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span>03</span>
              <span>↗</span>
            </div>

            <div className="project-visual orange">
              <div className="attendance-visual">
                <span>ATTENDANCE</span>
                <strong>85%</strong>
              </div>
            </div>

            <div className="project-content">
              <p className="project-type">PROGRAMMING PROJECT</p>
              <h3>Student Attendance System</h3>
              <p>
                A simple system for recording and managing
                student attendance information.
              </p>

              <div className="project-tags">
                <span>C++</span>
                <span>Programming</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="section">
        <div className="section-heading">
          <div>
            <span className="section-number">05</span>
            <p>BEYOND ACADEMICS</p>
          </div>

          <h2>
            Experience & <span>activities.</span>
          </h2>
        </div>

        <div className="activities-grid">

          <div className="activity-card">
            <span>01</span>
            <h3>Rover Scout</h3>
            <p>
              Participated in Rover activities and developed
              teamwork, communication and leadership skills.
            </p>
            <div>TEAMWORK ↗</div>
          </div>

          <div className="activity-card">
            <span>02</span>
            <h3>Community Volunteering</h3>
            <p>
              Participated in community-based volunteer activities
              and social initiatives.
            </p>
            <div>COMMUNITY ↗</div>
          </div>

          <div className="activity-card">
            <span>03</span>
            <h3>Academic Projects</h3>
            <p>
              Worked on university projects involving web
              development, programming and software design.
            </p>
            <div>LEARNING ↗</div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-glow"></div>

        <div className="contact-inner">

          <div className="contact-heading">
            <span>06 / CONTACT</span>

            <h2>
              Let's create
              <br />
              something <span>great.</span>
            </h2>

            <p>
              Have a project idea or simply want to connect?
              I'd love to hear from you.
            </p>
          </div>

          <div className="contact-content">

            <div className="contact-details">
              <div>
                <span>EMAIL</span>
                <strong>info@safa.com</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Dhaka, Bangladesh</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Web Development</strong>
              </div>
            </div>

            <form className="contact-form">

              <div className="input-row">
                <input
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <textarea
                rows="6"
                placeholder="Tell me about your message..."
              ></textarea>

              <button type="button">
                Send Message <span>↗</span>
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>Safa<span>.</span></h3>
          <p>Designed & built with curiosity.</p>
        </div>

        <p className="copyright">
          © 2026 Safa Akter. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;