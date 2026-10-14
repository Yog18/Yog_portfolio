function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        <div className="project-card">
          <h3>Linux Administration</h3>
          <p>
            Practiced Linux user management, services,
            permissions, monitoring and troubleshooting.
          </p>
        </div>

        <div className="project-card">
          <h3>Monitoring with Zabbix</h3>
          <p>
            Learned host monitoring, triggers,
            metrics and alert notifications.
          </p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>
            Building a portfolio website using React,
            CSS, Git and GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
