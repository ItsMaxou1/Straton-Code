import { useEffect, useRef } from "react";
import projects from "../data/projectsData";

function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="realisations">
      <div className="projects-inner">
        <p className="projects-eyebrow">Ce que j'ai réalisé</p>
        <h2 className="projects-title">Mes projets</h2>
        <p className="projects-subtitle">
          Des projets concrets ou des démonstrations pour illustrer ce que je
          peux créer pour vous.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Image / Mockup */}
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-card__image"
                />
              </div>

              {/* Contenu */}
              <div className="project-card__body">
                <span className="project-card__type">{project.type}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn"
                  >
                    {project.linkLabel ?? "Voir le projet"}
                    <span aria-hidden="true"> →</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
