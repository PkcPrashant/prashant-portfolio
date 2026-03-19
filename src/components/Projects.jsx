const projects = [
  {
    title: "DHA Portal",
    client: "Dubai Health Authority",
    description:
      "Official public‐facing healthcare platform serving citizens across Dubai.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Next.js", "React", "CMS", "SSR"],
  },

  {
    title: "DubaiNow",
    client: "Dubai Health Authority",
    description:
      "Integration of DHA healthcare services into DubaiNow, Dubai’s government super application.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Node.js", "Spring Boot", "Java FTL", "APIs"],
  },

  {
    title: "WorkerPlaceSafety",
    client: "Nokia",
    description:
      "Real‐time workplace safety monitoring platform integrating Nokia APIs and live video streams.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Node.js", "MongoDB", "RBAC"],
  },

  {
    title: "Datastream for Office",
    client: "London Stock Exchange",
    description:
      "Enterprise financial desktop application integrated with Microsoft Excel workflows.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Electron", "Node.js", "VBA"],
  },

  {
    title: "Assist",
    client: "EPAM Systems",
    description:
      "Internal HR automation platform built to replace third‐party HR and payroll systems.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Node.js", "Jenkins", "Agile"],
  },
];

const Projects = () => {
  return (
    <div className="container mt-5 mb-5 px-3 px-md-5">
      <h2 className="text-center fw-bold display-6 mb-4">
        Projects
      </h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div
              className="h-100 p-3 border rounded-4"
              style={{
                backgroundColor: "#1a1a1a",
                borderColor: "#444",
              }}
            >
              {/* Image */}
              {/* <div className="overflow-hidden rounded">
                <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded project-img"
                />
              </div> */}

              {/* Title */}
              <div className="d-flex justify-content-between align-items-center pt-3 pb-2 px-2">
                <p className="fw-bold fs-4 text-decoration-none text-light">
                  {project.title}
                </p>
              </div>

              {/* Client */}
              <div className="d-flex justify-content-between align-items-center pb-2 px-2">
                <p className="fw-bold fs-6 text-decoration-none text-light">
                  Client: {project.client}
                </p>
              </div>

              {/* Description */}
              <div className="px-2 text-secondary fst-italic">
                {project.description}
              </div>

              {/* Tags */}
              <div className="d-flex flex-wrap gap-2 px-2 pt-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#2e2e2e",
                      fontSize: "0.75rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CSS for hover effect */}
      <style>
        {`
          .project-img {
            transition: transform 0.5s ease;
          }
          .project-img:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Projects;

