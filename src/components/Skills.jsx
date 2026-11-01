function Skills() {
  const skillGroups = [
    {
      title: "Linux Administration",
      skills: ["RHEL 7/8/9", "CentOS", "Ubuntu", "User & Group Management", "Permissions", "Troubleshooting"]
    },
    {
      title: "Monitoring & Services",
      skills: ["Zabbix", "Apache", "NTP/Chrony", "NFS", "Samba", "GLPI"]
    },
    {
      title: "Scripting & Tools",
      skills: ["Bash Scripting", "Git", "GitHub", "Cron Jobs", "Package Management"]
    },
    {
      title: "DevOps & Cloud Learning",
      skills: ["Docker", "Ansible", "AWS Basics", "React"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
