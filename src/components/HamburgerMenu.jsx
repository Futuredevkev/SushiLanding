import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hamburguesa.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedSection, setSelectedSection] = useState("SushiRush");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1148) {
        setIsOpen(false); // Oculta el menú en pantallas más grandes
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hamburger-menu">
      {windowWidth <= 1148 && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>
      )}
      <div className={`menu ${isOpen ? "show" : ""}`}>
        <div className="menu-header">
          <div className="close-button" onClick={toggleMenu}>
            <div className="close-bar"></div>
            <div className="close-bar"></div>
          </div>
        </div>
        <nav className="menu-items">
          <Link
            to="/"
            className={`menu-item ${selectedSection === "SushiRush" ? "selected" : ""}`}
            onClick={() => handleSectionClick("SushiRush")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`menu-item ${selectedSection === "Pedir Sushi" ? "selected" : ""}`}
            onClick={() => handleSectionClick("Pedir Sushi")}
          >
            Sushis
          </Link>
          {/* Agrega más elementos del menú según sea necesario */}
        </nav>
      </div>
    </div>
  );
}
