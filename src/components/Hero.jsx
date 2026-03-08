const badges = [
  { icon: "✦", label: "Accompagnement personnalisé" },
  { icon: "◈", label: "Démo avant engagement" },
  { icon: "◉", label: "Solution adaptée aux entreprises locales" },
];

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow bg-glow-1" />
      <div className="hero-bg-glow bg-glow-2" />
      <div className="hero-bg-glow bg-glow-3" />

      <div className="hero-inner">
        {/* Colonne gauche — texte */}
        <div className="hero-text">
          <p className="hero-eyebrow hero-anim anim-1">
            Agence web &amp; digital
          </p>

          <h1 className="hero-title hero-anim anim-2">
            STRATON
            <br />
            <span className="hero-title-accent">CODE</span>
          </h1>

          <p className="hero-slogan hero-anim anim-3">
            Le pilier digital de votre activité.
          </p>

          <p className="hero-desc hero-anim anim-4">
            Nous concevons des sites web et applications sur mesure pour les
            entreprises locales qui veulent grandir en ligne.
          </p>

          <div className="hero-actions hero-anim anim-5">
            <a href="#contact" className="hero-btn primary">
              Demander un devis
            </a>
            <a href="#realisations" className="hero-btn secondary">
              Voir les réalisations
            </a>
          </div>

          <div className="hero-badges hero-anim anim-6">
            {badges.map((b) => (
              <div key={b.label} className="hero-badge">
                <span className="hero-badge-icon">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite — image */}
        <div className="hero-visual hero-anim anim-visual">
          <img
            src={`${import.meta.env.BASE_URL}Hero_PC_Tel.png`}
            alt="Aperçu d'un site web sur ordinateur et mobile"
            className="hero-mockup-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
