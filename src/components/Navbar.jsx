import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <Coffee size={28} strokeWidth={2.5} />
          <span>Espresso Elegance</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar__links">
          <Link to="/" className="navbar__link">Главная</Link>
          <Link to="/menu" className="navbar__link">Меню</Link>
          <Link to="/about" className="navbar__link">О нас</Link>
          <Link to="/contact" className="navbar__link">Контакты</Link>
          <Link to="/booking" className="navbar__cta">Забронировать</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="navbar__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (To be implemented with styles) */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          <Link to="/" className="navbar__link" onClick={() => setIsOpen(false)}>Главная</Link>
          <Link to="/menu" className="navbar__link" onClick={() => setIsOpen(false)}>Меню</Link>
          <Link to="/about" className="navbar__link" onClick={() => setIsOpen(false)}>О нас</Link>
          <Link to="/contact" className="navbar__link" onClick={() => setIsOpen(false)}>Контакты</Link>
          <Link to="/booking" className="navbar__cta" onClick={() => setIsOpen(false)}>Забронировать</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
