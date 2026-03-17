import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Coffee size={40} strokeWidth={2} className="footer__logo" />
          <h3 className="footer__title">Espresso Elegance</h3>
          <p className="footer__tagline">Искусство кофе в каждом глотке</p>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Espresso Elegance. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
