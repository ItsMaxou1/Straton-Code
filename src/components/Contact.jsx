import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("https://formspree.io/f/xdawooob", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <p className="contact-eyebrow">Contact</p>
          <h2 className="contact-title">
            Travaillons <span>ensemble</span>
          </h2>
          <p className="contact-intro">
            Vous avez un projet en tête ? N'hésitez pas à me contacter, je serai
            ravi d'en discuter avec vous.
          </p>
          <ul className="contact-details">
            <li className="contact-detail">
              <span>📞</span>
              <a href="tel:0635413617" className="contact-detail__value">
                06 35 41 36 17
              </a>
            </li>
            <li className="contact-detail">
              <span>✉️</span>
              <a
                href="mailto:maximegervilla@gmail.com"
                className="contact-detail__value"
              >
                maximegervilla@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="contact-form__input"
                  required
                />
              </div>
              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="contact-form__input"
                  required
                />
              </div>
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="subject">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Votre sujet"
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Votre message..."
                className="contact-form__textarea"
                required
              />
            </div>

            <button type="submit" className="contact-form__submit">
              Envoyer <span aria-hidden="true">→</span>
            </button>

            {status === "success" && (
              <p className="contact-form__success">
                ✅ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="contact-form__error">
                ❌ Une erreur est survenue, réessaie.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
