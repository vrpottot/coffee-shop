import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, MapPin, Heart, Award, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`home-page ${mounted ? 'is-mounted' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">
            Искусство кофе<br/><span>в каждом глотке</span>
          </h1>
          <p className="hero__subtitle">
            Место, где премиальные зерна встречаются с мастерством бариста, создавая идеальную историю вашего утра.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn-premium">
              Посмотреть меню <ArrowRight size={20} />
            </Link>
            <Link to="/booking" className="btn-outline">
              Забронировать
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Почему мы?</span>
            <h2 className="section-title">Особенности Espresso Elegance</h2>
          </div>
          
          <div className="features__grid">
            {[
              { icon: <Coffee size={32} />, title: '100% Арабика', text: 'Свежеобжаренные зёрна с лучших плантаций мира' },
              { icon: <Award size={32} />, title: 'Мастерство', text: 'Наши бариста — настоящие художники своего дела' },
              { icon: <Heart size={32} />, title: 'Уют', text: 'Атмосфера, располагающая к важным разговорам' },
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Drinks */}
      <section className="popular">
        <div className="container">
          <div className="section-header section-header--light">
            <span className="section-subtitle">Избранное</span>
            <h2 className="section-title">Популярные напитки</h2>
          </div>
          
          <div className="popular__grid">
            {[
              { img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80', name: 'Капучино Сигнатур', desc: 'Бархатистая пенка с нотками темного шоколада', price: '220 ₽' },
              { img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80', name: 'Лавандовый Раф', desc: 'Нежное сочетание сливок и прованской лаванды', price: '280 ₽' },
              { img: 'https://png.pngtree.com/thumb_back/fw800/background/20251117/pngtree-steaming-matcha-latte-with-elegant-art-on-a-rustic-wooden-table-image_20392415.webp', name: 'Матча Элеганс', desc: 'Традиционный японский чай высшего сорта', price: '280 ₽' }
            ].map((item, i) => (
              <div key={i} className="drink-card">
                <div className="drink-card__image-wrapper">
                  <img src={item.img} alt={item.name} className="drink-card__image" />
                </div>
                <div className="drink-card__content">
                  <h3 className="drink-card__name">{item.name}</h3>
                  <p className="drink-card__desc">{item.desc}</p>
                  <div className="drink-card__footer">
                    <span className="drink-card__price">{item.price}</span>
                    <Link to="/menu" className="drink-card__link"><ArrowRight size={18} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">Начните свой день правильно</h2>
          <p className="cta__text">Забронируйте столик и окунитесь в атмосферу настоящего кофейного искусства</p>
          <Link to="/booking" className="btn-premium btn-premium--gold">
            Забронировать сейчас
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
