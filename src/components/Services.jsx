import services from "../data/ServicesData.jsx";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <p className="services-eyebrow">Ce que nous faisons</p>
        <h2 className="services-title">Nos services</h2>
        <p className="services-subtitle">
          Trois expertises complémentaires pour construire et développer votre
          présence en ligne.
        </p>

        <ul className="services-grid">
          {services.map((service) => (
            <li key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-includes">
                {service.includes.map((item) => (
                  <li key={item} className="service-include-item">
                    <span className="service-include-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
