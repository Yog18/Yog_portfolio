
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio.</h2>
        <p>Linux | DevOps | Cloud</p>
      </nav>

      {/* Home Section */}
      <main className="hero">
        <p className="intro">HELLO, WORLD! 👋</p>

        <h1>
          I'm a Linux Administrator
          <br />
          Learning DevOps.
        </h1>

        <p className="description">
          Welcome to my personal portfolio.
          I am learning Linux, Git, React and Cloud technologies.
        </p>

        <div className="buttons">
          <a href="#about" className="btn primary">
            About Me
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </main>

      {/* About Me Section */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am a Linux Administrator interested in Linux
          administration, automation and cloud technologies.
          I am continuously learning DevOps tools and building
          practical projects to improve my technical skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>

        <div className="skill-list">
          <span>Linux</span>
          <span>Git & GitHub</span>
          <span>Docker</span>
          <span>Ansible</span>
          <span>AWS</span>
          <span>Zabbix</span>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact">
        <h2>Contact Me</h2>
        <p>Let's connect and learn together!</p>
        <p>Made with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
