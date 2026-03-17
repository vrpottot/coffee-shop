import React, { useEffect, useState } from 'react';
import { Coffee, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { name: 'Александр Петров', role: 'Главный бариста', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Мария Иванова', role: 'Управляющая', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    { name: 'Дмитрий Соколов', role: 'Бариста', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Елена Смирнова', role: 'Бариста', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' }
  ];

  return (
    <div className={`about-page ${mounted ? 'is-mounted' : ''}`}>
      {/* Hero */}
      <header className="about-header">
        <div className="about-header__content">
          <h1 className="about-header__title">О Espresso Elegance</h1>
          <p className="about-header__subtitle">История страсти, воплощенная в каждой чашке</p>
        </div>
      </header>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <span className="section-subtitle">Наша история</span>
              <h2 className="section-title">С чего все начиналось</h2>
              <div className="about-story__text">
                <p>
                  В 2019 году мы открыли двери нашей первой кофейни в самом сердце города. 
                  Всё началось с мечты создать место, где люди смогут наслаждаться по-настоящему 
                  качественным кофе в уютной атмосфере.
                </p>
                <p>
                  Наш основатель Александр Петров влюбился в кофе во время путешествия по Италии. 
                  Вернувшись домой, он решил посвятить свою жизнь искусству приготовления идеального эспрессо.
                </p>
                <p>
                  Сегодня мы работаем только с проверенными поставщиками со всего мира. 
                  Каждую неделю мы обжариваем свежие зёрна, экспериментируя с новыми рецептами.
                </p>
              </div>
            </div>
            <div className="about-story__image-wrapper">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="Кофейня" className="about-story__image" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Наши ценности</h2>
          </div>
          
          <div className="values-grid">
            {[
              { icon: <Coffee size={32} />, title: 'Качество', text: 'Используем только лучшие зёрна сегмента Specialty и свежие ингредиенты' },
              { icon: <Heart size={32} />, title: 'Страсть', text: 'Любим то, что делаем, и делимся этой энергией с каждым гостем' },
              { icon: <Award size={32} />, title: 'Мастерство', text: 'Наши бариста постоянно совершенствуют навыки и участвуют в чемпионатах' },
              { icon: <Users size={32} />, title: 'Гостеприимство', text: 'Создаем атмосферу дома, где каждого гостя ждут как друга' }
            ].map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Лица проекта</span>
            <h2 className="section-title">Наша команда</h2>
          </div>
          
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__image-wrapper">
                  <img src={member.img} alt={member.name} className="team-card__image" />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="about-awards">
        <div className="container">
          <div className="about-awards__content">
            <h2 className="about-awards__title">Награды и достижения</h2>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-item__icon">🏆</div>
                <div className="award-item__year">2020</div>
                <p className="award-item__text">Лучшая концептуальная кофейня</p>
              </div>
              <div className="award-item">
                <div className="award-item__icon">⭐</div>
                <div className="award-item__year">2021</div>
                <p className="award-item__text">Выбор экспертов Specialty Coffee</p>
              </div>
              <div className="award-item">
                <div className="award-item__icon">🥇</div>
                <div className="award-item__year">2022</div>
                <p className="award-item__text">Победители Barista Cup</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
