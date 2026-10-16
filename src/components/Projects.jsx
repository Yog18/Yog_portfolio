
function ProjectCard({
  title,
  description,
  category = "General",
  technologies = [],
  github

}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <span className="project-category">{category}</span>
      <p>{description}</p>
      {technologies.length > 0 && (
      <div className="technology-list">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    )}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View on GitHub
      </a>
    )}
    </div>
  );
}

function Projects() {
  const projects = [
        {
      title: "Linux Administration",
      description: "Practiced Linux user management and troubleshooting.",
      category: "Linux",
      technologies: ["Linux", "RHEL", "Troubleshooting"],
      github: "https://github.com/Yog18/Yog_portfolio"
    },
    {
      title: "Monitoring with Zabbix",
      description:
        "Practiced host monitoring and alert notifications."
    },
    {
      title: "Personal Portfolio",
      description:
        "Building a portfolio with React, CSS and Git."
    },
    {
      title: "Ansible Automation",
      description:
        "Practiced automating Linux administration tasks."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            category={project.category}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
