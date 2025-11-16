import './Inicio.css'
import alumnoImg from '../assets/alumno.jpeg'
import { useState, useEffect } from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaUsers } from 'react-icons/fa'

function Inicio() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      icon: <FaUserGraduate />,
      title: 'Atención personalizada',
      description: 'Enfoque individualizado para cada estudiante'
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Profesores especializados por materia',
      description: 'Expertos en cada área del examen ECOEMS'
    },
    {
      icon: <FaBookOpen />,
      title: 'Material de estudio actualizado',
      description: 'Guías de trabajo actualizadas según el temario oficial'
    },
    {
      icon: <FaUsers />,
      title: 'Asesorías personalizadas',
      description: 'Para estudiantes desde primaria hasta nivel superior'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ecp-page">
      <section className="ecp-hero" style={{ backgroundImage: `url(${alumnoImg})`, zIndex: 1 }}>
        <div className="ecp-hero__overlay"></div>
        <div className="ecp-hero__content">
          <h1 className="ecp-hero__title">
            ¿Listo para enfrentar tu examen de admisión?
          </h1>
          <p className="ecp-hero__subtitle">
            En ECOPREP, transformamos tus dudas en aciertos.
          </p>
        </div>
      </section>

      <section className="ecp-ofertas">
        <div className="ecp-ofertas__container">
          <div className="ecp-ofertas__left">
            <h2 className="ecp-ofertas__title">¿Qué ofrecemos?</h2>
            <p className="ecp-ofertas__description">
              Nuestro curso intensivo está diseñado para brindarte las herramientas necesarias para dominar el examen ECOEMS. Con un enfoque práctico y personalizado, te preparamos para cada sección del examen, asegurando que adquieras el conocimiento y la confianza para tener éxito.
            </p>
          </div>
          
          <div className="ecp-ofertas__right">
            <div className="ecp-cards-container">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`ecp-card ${index === activeCard ? 'active' : ''} ${index === (activeCard - 1 + cards.length) % cards.length ? 'prev' : ''}`}
                >
                  <div className="ecp-card__icon">{card.icon}</div>
                  <h3 className="ecp-card__title">{card.title}</h3>
                  <p className="ecp-card__description">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="ecp-cards-indicators">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`ecp-indicator ${index === activeCard ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                  aria-label={`Ver tarjeta ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio
