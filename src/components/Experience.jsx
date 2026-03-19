const experienceList = [
  {
    company: 'LTIMindtree',
    client: 'Dubai Health Authority',
    position: 'Software Engineer',
    duration: 'Mar 2025 – Present',
    location: 'Dubai, UAE',
    description: [
      'Delivered healthcare services integrated into DubaiNow, Dubai’s government super application.',
      'Owned frontend architecture of Dubai Health Authority’s (DHA) official portal using Next.js and React.',
      'Designed secure Node.js middleware implementing SSO‐based authentication and upstream API integrations.',
      'Collaborated directly with stakeholders for requirement analysis through production delivery.',
      'Contributed to aviation digital platform development for flydubai.'
    ]
  },
  {
    company: 'Innova Solutions',
    client: 'Verizon, Nokia',
    position: 'Software Engineer',
    duration: 'Nov 2022 – Feb 2025',
    location: 'Noida, India',
    description: [
      'Built full‐stack enterprise applications including AI‐enabled HR systems and internal screening platforms.',
      'Developed real‐time industrial safety dashboards and alerting workflows for enterprise clients (Nokia).',
      'Designed scalable role‐based access modules and analytics/reporting features',
      'Integrated backend APIs and authentication mechanisms across multi‐role systems.'
    ]
  },
  {
    company: 'Publicis Sapient',
    position: 'Associate Technology L2',
    duration: 'Apr 2024 – Oct 2024',
    location: 'Noida, India',
    description: [
      'Completed structured engineering programs and internal technology enablement initiatives.'
    ]
  },
  {
    company: 'EPAM Systems',
    client: 'London Stock Exchange',
    position: 'Software Engineer',
    duration: 'Jan 2020 – Mar 2022',
    location: 'Hyderabad, India',
    description: [
      'Developed enterprise financial and HR platforms for global clients including Refinitiv (London Stock Exchange Group).',
      'Contributed to frontend and backend integrations in structured agile delivery environments.',
      'Participated in CI/CD pipelines and peer‐reviewed releases.',
      'Resolved high‐impact production issues under critical go‐live timelines.' 
    ]
  },
  {
    company: 'In-CUBE',
    position: 'Intern',
    duration: 'Oct 2019 – Dec 2019',
    location: 'Remote, India',
    description: [
      `Developed the login page having google, linkedin, github and custom login.`
    ]
  },
  {
    company: 'Wipro Limited',
    client: 'Google',
    position: 'Intern',
    duration: 'Jan 2019 – Apr 2019',
    location: 'Hyderabad, India',
    description: [
      'Executed regression testing and defect tracking for Google Pay US application.'
    ]
  },
]

const Experience = () => {
  return (
    <div className="experience-card rounded-3 p-4 d-flex flex-column gap-3">
      <h2 className="text-white">Experience</h2>
      {
        experienceList.map(({ company, position, location, duration, description, client }) => (
          <article className="d-flex flex-column gap-2" key={company}>
            <div className="d-flex experience-header-container">
              <div>
                <div className="d-flex align-items-end gap-2">
                  <h3 className="text-white">{company}</h3>
                  {client && <small>[Client: {client}]</small>}
                </div>
                <p>{position}</p>
              </div>
              <p>{location} | {duration}</p>
            </div>
            <ul>
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </article>
        ))
      }
    </div>
  );
}

export default Experience;