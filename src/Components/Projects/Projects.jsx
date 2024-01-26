import "./projects.css";

import IMG1 from "../../Images/1.promptopia.png";
import IMG2 from "../../Images/2.spotify_clone.png";
import IMG3 from "../../Images/3.project_travel.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Promptopia",
      img: IMG1,
      description:
        "It is the website for construction machine renting company (Flexcavo) from Berlin",
      technologies: "React.js | Next.js | Tailwind CSS | MongoDB | Google OAuth",
      github_link: "https://github.com/chyuanhan/project_promptopia9659",
      project_link: "https://project-promptopia9659.vercel.app/",
    },
    {
      id: 2,
      title: "Spotify clone",
      img: IMG2,
      description:
        "A Spotify clone app with React18, Redux Toolkit, Tailwind CSS, Shazam Api(RapidAPI).",
      technologies: "Vite | React.js | Tailwind CSS | Redux Toolkit",
      github_link:"https://github.com/chyuanhan/project_spotify_clone",
      project_link: "https://project-spotify-clone.vercel.app/",
    },
    {
      id: 3,
      title: "Travel.",
      img: IMG3,
      description:
        "This is a one-page website for searching travel packages. The project is built using React.",
      technologies: "React.js | SASS",
      github_link:"https://github.com/chyuanhan/project_travel",
      project_link: "https://project-travel-three.vercel.app/",
    },
  ];

  return (
    <section id="Projects">
      <h1 className='title'>
        Projects<span style={{ color: '#FFBE98' }}>.</span>
      </h1>
      <div className='section-divider'></div>

      <div className="projects-wrapper">
        {projects.map((pro) => { return (
          <div className="projects-item" key={pro.id}>
            <div className="projects-item-image">
              <img src={pro.img} alt={pro.title} />
            </div>

            <div className="projects-item-content">
              <h3 className="project-title">{pro.title}</h3>
              <p className="project-desc">{pro.description}</p>
              <p className="project-tech">{pro.technologies}</p>
            </div>

            <div className="projects-item-button">
              <a
                href={pro.github_link}
                target="_blank"
                className="btn-secondary"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={pro.project_link}
                target="_blank"
                className="btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>

          </div>
        )})}
      </div>
    </section>
  );
};

export default Projects;
