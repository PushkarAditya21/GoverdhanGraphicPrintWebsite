
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img
            src="/images/goverdhan-logo.png"
            alt="Goverdhan Graphic Print logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>Goverdhan</strong>
            <span>GRAPHIC PRINT</span>
            <small>High Quality Stamp Maker</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="tel:9871694693"
            className="header-contact"
            onClick={closeMenu}
          >
            Call Our Shop <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
