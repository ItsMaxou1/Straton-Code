import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Zone gauche — Logo */}
        <a href="#" className="header-logo">
          STRATON CODE
        </a>

        {/* Zone centre — Navigation desktop */}
        <nav className="header-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone droite — CTA desktop */}
        <div className="header-right">
          <a href="#contact" className="header-cta">
            Demander un devis
          </a>
        </div>

        {/* Burger mobile */}
        <button
          className={`header-burger${menuOpen ? " open" : ""}`}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Panneau mobile */}
      <div className={`header-mobile-panel${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="header-mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="header-cta mobile" onClick={closeMenu}>
          Demander un devis
        </a>
      </div>
    </header>
  );
}

export default Header;
