const experienceList = [
  {
    company: 'Innova Solutions',
    client: 'Verizon',
    position: 'Software Engineer',
    duration: 'Nov 2022 – Present',
    description: `Formulated emergency alert features and multi-roles configurations, reducing resolution time by 65%. Devised a portal for recruiters to train and screen candidates, improving hiring efficiency by 30%. Revamped app interface for the e-commerce site, increasing customer engagement by 20%.`
  },
  {
    company: 'Publicis Sapient',
    position: 'Associate Technology L2',
    duration: 'Apr 2024 – Oct 2024',
    description: `Collaborated with cross-functional teams to deliver scalable solutions, improving patient management.`
  },
  {
    company: 'EPAM Systems',
    client: 'LSEG',
    position: 'Software Engineer',
    duration: 'Jan 2020 – Mar 2022',
    description: `Migrated a financial application from legacy code to a modern platform, boosting processing speed by 30%. Produced and launched an employee management and self-service portal, reducing operational costs by 20%.`
  },
  {
    company: 'In-CUBE',
    position: 'Intern',
    duration: 'Oct 2019 – Dec 2019',
    description: `Contributed to the development of social and custom logins, reducing login and registration time by 50%.`
  },
  {
    company: 'Wipro Limited',
    client: 'Google',
    position: 'Intern',
    duration: 'Jan 2019 – Apr 2019',
    description: `Conducted GUI and regression testing for 10+ feature releases, ensuring a bug-free experience.`
  },
]

const Experience = () => {
  return (
    <div className="experience-card rounded-3 p-4 d-flex flex-column gap-3">
      <h2 className="text-white">Experience</h2>
      {
        experienceList.map(({ company, position, duration, description, client }) => (
          <article className="d-flex flex-column gap-2" key={company}>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex align-items-end gap-2">
                  <h3 className="text-white">{company}</h3>
                  {client && <small>[Client: {client}]</small>}
                </div>
                <p>{position}</p>
              </div>
              <p>{duration}</p>
            </div>
            <p>{description}</p>
          </article>
        ))
      }
    </div>
  );
}

export default Experience;