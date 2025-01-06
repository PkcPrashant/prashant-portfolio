import IconCloud from "./ui/IconCloud"

const skillsList = [
  {
    "name": "React",
    "color": "rgb(97, 218, 251)",
    "slug": "react"
  },
  {
    "name": "Redux",
    "color": "rgb(118, 74, 188)",
    "slug": "redux"
  },
  {
    "name": "Angular",
    "color": "rgb(221, 27, 41)",
    "slug": "angular"
  },
  {
    "name": "JavaScript",
    "color": "rgb(240, 219, 79)",
    "slug": "javascript"
  },
  {
    "name": "TypeScript",
    "color": "rgb(49, 120, 198)",
    "slug": "typescript"
  },
  {
    "name": "HTML",
    "color": "rgb(227, 76, 38)",
    "slug": "html5"
  },
  {
    "name": "CSS",
    "color": "rgb(38, 77, 228)",
    "slug": "css3"
  },
  {
    "name": "Bootstrap",
    "color": "rgb(86, 61, 124)",
    "slug": "bootstrap"
  },
  {
    "name": "Responsive Web Design",
    "color": "rgb(0, 128, 255)",
    "slug": ""
  },
  {
    "name": "Node",
    "color": "rgb(102, 159, 98)",
    "slug": "nodedotjs"
  },
  {
    "name": "Express",
    "color": "rgb(255, 255, 255)",
    "slug": "express"
  },
  {
    "name": "Java",
    "color": "rgb(234, 89, 61)",
    "slug": ""
  },
  {
    "name": "Spring Boot",
    "color": "rgb(0, 161, 71)",
    "slug": "spring"
  },
  {
    "name": "Microservices",
    "color": "rgb(42, 159, 214)",
    "slug": ""
  },
  {
    "name": "RESTful Services",
    "color": "rgb(66, 135, 245)",
    "slug": ""
  },
  {
    "name": "MySQL",
    "color": "rgb(3, 136, 164)",
    "slug": "mysql"
  },
  {
    "name": "MongoDB",
    "color": "rgb(76, 174, 79)",
    "slug": "mongodb"
  },
  {
    "name": "Git",
    "color": "rgb(240, 80, 51)",
    "slug": "git"
  },
  {
    "name": "VS Code",
    "color": "rgb(0, 122, 204)",
    "slug": "visualstudiocode"
  },
  {
    "name": "IntelliJ",
    "color": "rgb(49, 70, 107)",
    "slug": "intellijidea"
  },
  {
    "name": "Jenkins",
    "color": "rgb(255, 0, 0)",
    "slug": "jenkins"
  }
]

const Skills = () => {
  return (
    <div className="skills-card rounded-3 p-4 d-flex gap-3">
      <div className="d-flex flex-column gap-3 w-75 p-4">
        <h2 className="text-white mb-3">Skills</h2>
        <div className="d-flex gap-2 flex-wrap">
          {skillsList.map(({ name, color }, id) => (
            <div key={name} className={`d-flex align-items-center justify-content-center gap-2 px-2 py-0 rounded-pill skill skill-${id}`}>
              <style>
                {`.skill-${id}:hover {box-shadow: 1px 0px 50px ${color}, -1px 0px 10px ${color}; cursor: default}`}
              </style>
              <div className="h-2 w-2 rounded-circle ms-1" style={{ backgroundColor: color }}></div>
              <small className="me-1">{name}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="w-25">
        <IconCloud slugs={skillsList.filter((skill) => skill.slug).map((skill) => skill.slug)} />
      </div>
    </div>
  )
}

export default Skills