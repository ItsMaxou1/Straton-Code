import { useEffect, useRef } from "react";
import steps from "../data/MethodsData";

function Method() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="method" id="methode">
      <div className="method-inner">
        <p className="method-eyebrow">Comment ça se passe</p>
        <h2 className="method-title">Notre méthode</h2>
        <p className="method-subtitle">
          Un processus simple et transparent pour que vous sachiez exactement où
          en est votre projet.
        </p>

        <ol className="method-steps">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="method-step"
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className="method-step-number">0{index + 1}</span>
              <span className="method-step-icon">
                <img src={step.icon} alt="" aria-hidden="true" />
              </span>
              <h3 className="method-step-title">{step.title}</h3>
              <ul className="method-step-lines">
                {step.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Method;
