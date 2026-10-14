
function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Projects() {

    const projects = [
    {
        title: "Linux Administration",
        description: "Practiced Linux user management and troubleshooting."
    },
    {
        title: "Monitoring with Zabbix",
        description: "Practiced host monitoring and alert notifications."
    },
    {
        title: "Personal Portfolio",
        description: "Building a portfolio with React, CSS and Git."
    },
    {
        title: "Ansible Automation",
        description: "Practiced automating Linux administration tasks."
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
    />
    ))}

      </div>
    </section>
  );
}

export default Projects;
