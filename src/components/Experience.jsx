const Experience = () => {
  return (
    <div className="experience-card rounded-3 p-4 d-flex flex-column gap-3">
      <h2 className="text-white">Experience</h2>

      <article className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="text-white">Larsen & Toubro Defence</h3>
            <p>ML Intern</p>
          </div>
          <div>
            <p>March 2024 – Sep 2024</p>
          </div>
        </div>

        <p>
          Developed GAN models for synthetic data generation, optimized
          CentreNet for real-time PCB analysis, and implemented denoising
          algorithms in Python and C++. Gained expertise in synthetic data,
          computer vision, and real-time algorithm optimization for defense
          applications.
        </p>
      </article>

      <article className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="text-white">Larsen & Toubro Defence</h3>
            <p>ML Intern</p>
          </div>
          <div>
            <p>March 2024 – Sep 2024</p>
          </div>
        </div>

        <p>
          Developed GAN models for synthetic data generation, optimized
          CentreNet for real-time PCB analysis, and implemented denoising
          algorithms in Python and C++. Gained expertise in synthetic data,
          computer vision, and real-time algorithm optimization for defense
          applications.
        </p>
      </article>
    </div>
  );
}

export default Experience;