import { useEffect, useRef } from "react";
import reasons from "../data/WhyMeData";

function WhyMe() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("whyme-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyme" id="whyme">
      <div className="whyme-inner">
        {/* Colonne gauche — raisons */}
        <ul className="whyme-list">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="whyme-item"
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="whyme-icon">{reason.icon}</span>
              <div className="whyme-text">
                <h3 className="whyme-item-title">{reason.title}</h3>
                <p className="whyme-item-desc">{reason.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Colonne droite — carte promesse */}
        <aside
          className="whyme-card whyme-item"
          ref={(el) => (itemsRef.current[reasons.length] = el)}
          style={{ transitionDelay: `${reasons.length * 0.1}s` }}
        >
          <p className="whyme-card-eyebrow">Notre promesse</p>
          <h2 className="whyme-card-title">
            Un site qui travaille
            <br />
            <span className="whyme-card-accent">pour vous</span>
          </h2>
          <p className="whyme-card-desc">
            Pas de jargon, pas de surprise. Un projet cadré, un résultat
            concret, un accompagnement de A à Z adapté aux entreprises locales.
          </p>
          <ul className="whyme-card-checks">
            <li>Devis gratuit et sans engagement</li>
            <li>Maquette offerte avant développement</li>
            <li>Livraison dans les délais convenus</li>
          </ul>
          <a href="#contact" className="whyme-cta">
            Demander un devis
          </a>
        </aside>
      </div>
    </section>
  );
}

export default WhyMe;
