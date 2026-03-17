import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`booking-page ${mounted ? 'is-mounted' : ''}`}>
      {/* Hero */}
      <header className="booking-header">
        <div className="booking-header__content">
          <h1 className="booking-header__title">Бронирование столика</h1>
          <p className="booking-header__subtitle">Ваш идеальный вечер начинается здесь</p>
        </div>
      </header>

      {/* Form Section */}
      <section className="booking-section">
        <div className="container container--narrow">
          {submitted ? (
            <div className="booking-success">
              <div className="booking-success__icon">
                <CheckCircle size={64} />
              </div>
              <h2 className="booking-success__title">Бронь подтверждена!</h2>
              <p className="booking-success__text">
                Спасибо, {formData.name}! Мы отправили подтверждение на {formData.email}.
                <br/>Ждём вас <strong>{formData.date}</strong> в <strong>{formData.time}</strong>!
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn btn-premium"
              >
                Забронировать ещё
              </button>
            </div>
          ) : (
            <div className="booking-card">
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label className="form-label">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Александр Иванов"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <Phone size={14} className="form-label__icon" />
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={14} className="form-label__icon" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>

                <div className="form-row form-row--triple">
                  <div className="form-group">
                    <label className="form-label">
                      <Calendar size={14} className="form-label__icon" />
                      Дата *
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Clock size={14} className="form-label__icon" />
                      Время *
                    </label>
                    <select
                      name="time"
                      className="form-select"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Выберите</option>
                      {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Users size={14} className="form-label__icon" />
                      Гостей *
                    </label>
                    <select
                      name="guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Комментарий (необязательно)</label>
                  <textarea
                    name="comment"
                    className="form-textarea"
                    value={formData.comment}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Особые пожелания или повод..."
                  />
                </div>

                <button 
                  type="submit"
                  className="btn btn-premium btn-full"
                >
                  Забронировать столик
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Info Cards */}
      <section className="booking-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-card__icon">⏰</div>
              <h3 className="info-card__title">Время работы</h3>
              <p className="info-card__text">Ежедневно: 08:00 — 22:00<br/>Завтраки до 12:00</p>
            </div>
            <div className="info-card">
              <div className="info-card__icon">🅿️</div>
              <h3 className="info-card__title">Парковка</h3>
              <p className="info-card__text">Собственная зона парковки для наших гостей</p>
            </div>
            <div className="info-card">
              <div className="info-card__icon">📱</div>
              <h3 className="info-card__title">Отмена</h3>
              <p className="info-card__text">Просим сообщать об отмене не менее чем за 2 часа</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
