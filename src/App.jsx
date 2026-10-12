
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="logo">MyPortfolio.</h2>
        <p>Linux | DevOps | Cloud</p>
      </nav>

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

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I enjoy learning Linux administration, automation
          and modern DevOps technologies.
        </p>
      </section>

      <footer id="contact">
        <p>Made with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;

