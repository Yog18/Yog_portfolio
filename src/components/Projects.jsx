
function ProjectCard({
  title,
  description,
  category,
  technologies = [],
  github
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <span className="project-category">
        {category}
      </span>

      <p>{description}</p>

      <div className="technology-list">
        {technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

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
      title: "Linux Server Administration",
      category: "Professional Experience",
      description:
        "Hands-on Linux administration including user management, permissions, package management, server monitoring and troubleshooting.",
      technologies: ["RHEL", "CentOS", "Ubuntu", "Linux"]
    },
    {
      title: "Zabbix Monitoring",
      category: "Monitoring",
      description:
        "Worked with Zabbix monitoring, host configuration, templates, alerts and server health monitoring.",
      technologies: ["Zabbix", "Linux", "Monitoring"]
    },
    {
      title: "Personal Portfolio Website",
      category: "Personal Project",
      description:
        "Building a responsive personal portfolio using React, CSS and GitHub.",
      technologies: ["React", "JavaScript", "CSS", "Git"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects & Work</h2>

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
