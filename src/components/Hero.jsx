function Hero() {
  return (
    <main className="hero">
      <p className="intro">HELLO, WORLD! 👋</p>

      <h1>
        Linux Administrator
        <br />
        <span>Learning DevOps & Cloud.</span>
      </h1>

      <p className="description">
        I have hands-on experience in Linux server administration,
        monitoring, troubleshooting and security patching.
        Currently, I am expanding my skills in Git, Docker,
        Ansible and Cloud technologies.
      </p>

      <div className="buttons">
        <a href="#about" className="btn primary">
          About Me
        </a>

        <a href="#projects" className="btn secondary">
          View Projects
        </a>
      </div>
    </main>
  );
}

export default Hero;
