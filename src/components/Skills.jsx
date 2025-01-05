import IconCloud from "./ui/IconCloud"

const skillsList = [
  {
    name: 'React',
    bgColor: 'cyan'
  },
  {
    name: 'Redux',
    bgColor: 'orange'
  },
  {
    name: 'Angular',
    bgColor: 'red'
  },
  {
    name: 'Javascript',
    bgColor: 'green'
  },
  {
    name: 'Typescript',
    bgColor: 'yellow'
  },
  {
    name: 'Java',
    bgColor: 'blue'
  },
  {
    name: 'Node',
    bgColor: 'pink'
  },
  {
    name: 'Express',
    bgColor: 'brown'
  },
  {
    name: 'Git',
    bgColor: 'crimson'
  },
  {
    name: 'HTML',
    bgColor: 'cyan'
  },
  {
    name: 'CSS',
    bgColor: 'orange'
  },
  {
    name: 'Bootstrap',
    bgColor: 'orange'
  },
  {
    name: 'Spring Boot',
    bgColor: 'red'
  },
  {
    name: 'MySQL',
    bgColor: 'green'
  },
  {
    name: 'MongoDB',
    bgColor: 'yellow'
  },
  {
    name: 'VS Code',
    bgColor: 'blue'
  },
  {
    name: 'IntelliJ',
    bgColor: 'pink'
  },
  {
    name: 'Jenkins',
    bgColor: 'crimson'
  },
]

const Skills = () => {
  return (
    <div className="skills-card rounded-3 p-4 d-flex gap-3">
      <div className="d-flex flex-column gap-3 w-75 p-4">
        <h2 className="text-white mb-3">Skills</h2>
        <div className="d-flex gap-2 flex-wrap">
          {skillsList.map(({ name, bgColor }) => (
            <div key={name} className="d-flex align-items-center justify-content-center gap-2 px-2 py-0 rounded-pill skill">
              <div className="h-2 w-2 rounded-circle ms-1" style={{ backgroundColor: bgColor }}></div>
              <small className="me-1">{name}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="w-25">
        <IconCloud />
      </div>
    </div>
  )
}

export default Skills