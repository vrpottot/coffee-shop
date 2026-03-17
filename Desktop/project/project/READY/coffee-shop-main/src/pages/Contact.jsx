import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`contact-page ${mounted ? 'is-mounted' : ''}`}>
      {/* Hero */}
      <header className="contact-header">
        <div className="contact-header__content">
          <h1 className="contact-header__title">Контакты</h1>
          <p className="contact-header__subtitle">Мы всегда открыты для общения и новых встреч</p>
        </div>
      </header>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card__icon-box">
                <MapPin size={32} />
              </div>
              <h3 className="contact-card__title">Адрес</h3>
              <p className="contact-card__text">
                г. Москва, ул. Арбат, д. 10<br/>
                <span>метро Арбатская (5 мин. пешком)</span>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-box">
                <Phone size={32} />
              </div>
              <h3 className="contact-card__title">Телефон</h3>
              <p className="contact-card__text">
                <a href="tel:+79991234567" className="contact-card__link">
                  +7 (999) 123-45-67
                </a><br/>
                <span>Ежедневно с 08:00 до 22:00</span>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-box">
                <Mail size={32} />
              </div>
              <h3 className="contact-card__title">Email</h3>
              <p className="contact-card__text">
                <a href="mailto:info@coffeeshop.ru" className="contact-card__link">
                  info@espresso-elegance.ru
                </a><br/>
                <span>Ответим в течение дня</span>
              </p>
            </div>
          </div>

          {/* Working Hours & Map */}
          <div className="contact-secondary-grid">
            <div className="hours-card">
              <div className="hours-card__header">
                <Clock size={32} className="hours-card__icon" />
                <h2 className="hours-card__title">Время работы</h2>
              </div>
              
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-item__day">Понедельник — Пятница</span>
                  <span className="hours-item__time">08:00 — 22:00</span>
                </div>
                <div className="hours-item">
                  <span className="hours-item__day">Суббота</span>
                  <span className="hours-item__time">09:00 — 23:00</span>
                </div>
                <div className="hours-item">
                  <span className="hours-item__day">Воскресенье</span>
                  <span className="hours-item__time">09:00 — 22:00</span>
                </div>
              </div>
            </div>

            <div className="map-card">
              <div className="map-placeholder">
                <div className="map-placeholder__content">
                  <MapPin size={48} className="map-placeholder__icon" />
                  <p className="map-placeholder__text">Интерактивная карта</p>
                  <span className="map-placeholder__subtext">г. Москва, ул. Арбат, 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="contact-social">
            <h2 className="contact-social__title">Мы в соцсетях</h2>
            <div className="social-buttons">
              <a href="#" className="social-btn social-btn--instagram">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="#" className="social-btn social-btn--facebook">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href="#" className="social-btn social-btn--whatsapp">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container container--narrow">
          <div className="contact-cta__card">
            <h2 className="contact-cta__title">Остались вопросы?</h2>
            <p className="contact-cta__text">
              Наша команда всегда на связи, чтобы сделать ваше пребывание у нас идеальным.
            </p>
            <a href="tel:+79991234567" className="btn btn-premium btn-icon">
              <Phone size={18} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
