import './Inicio.css'
import alumnoImg from '../assets/alumno.jpeg'
import ipnImg from '../assets/ipn.png'
import teamImg from '../assets/team.jpeg'
import { useState, useEffect } from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaUsers } from 'react-icons/fa'

function Inicio() {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

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

  // Mínima distancia para considerar un swipe
  const minSwipeDistance = 50

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length)
  }

  // Handlers para gestos táctiles
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextCard()
    }
    if (isRightSwipe) {
      prevCard()
    }
  }

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

      <section className="ecp-nosotros">
        <div className="ecp-nosotros__container">
          <h2 className="ecp-nosotros__title">
            Somos un conjunto de profesionistas impulsados por la pasión a la enseñanza.
          </h2>
          <div className="ecp-nosotros__content">
            <div className="ecp-nosotros__column">
              <p className="ecp-nosotros__text">
                Nuestro compromiso va más allá del aula: buscamos transformar la manera en la que los estudiantes se enfrentan al conocimiento, haciéndolo accesible, dinámico y motivador. En ECOPREP creemos en el poder de la educación para cambiar vidas.
              </p>
              <p className="ecp-nosotros__text">
                A lo largo de los años, hemos ayudado a cientos de estudiantes a alcanzar sus metas académicas.
              </p>
            </div>
            <div className="ecp-nosotros__column">
              <p className="ecp-nosotros__text">
                Nuestro método de enseñanza se enfoca en la comprensión profunda de los conceptos.
              </p>
              <p className="ecp-nosotros__text">
                Nos enorgullecemos de ser una institución que se adapta a las necesidades de cada estudiante. Ofrecemos horarios flexibles, tutorías adicionales y simulacros de examen para que cada alumno se sienta completamente preparado y seguro el día de su prueba.
              </p>
            </div>
          </div>
          <div className="ecp-nosotros__logos">
            <img src={ipnImg} alt="Logo IPN" className="ecp-nosotros__logo" />
            <img src="https://www.unam.mx/sites/default/files/images/unam.svg" alt="Logo UNAM" className="ecp-nosotros__logo" />
          </div>
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
            <div 
              className="ecp-cards-container"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
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

      <section className="ecp-profesores">
        <div className="ecp-profesores__container">
          <div className="ecp-profesores__left">
            <img src={teamImg} alt="Equipo de profesores ECOPREP" className="ecp-profesores__image" />
          </div>
          
          <div className="ecp-profesores__right">
            <h2 className="ecp-profesores__title">Profesorado</h2>
            <p className="ecp-profesores__text">
              Nuestro equipo docente en ECOPREP está conformado por Ingenieros y Licenciados, orgullosamente egresados del Instituto Politécnico Nacional (IPN). Cada uno cuenta con más de 4 años de experiencia ininterrumpida en la preparación de cursos, aportando no solo conocimientos sólidos, sino también estrategias didácticas probadas. Su compromiso, creatividad y vocación aseguran una preparación integral y efectiva para tu examen COMIPEMS, acompañándote paso a paso en tu camino al éxito académico.
            </p>
          </div>
        </div>
      </section>

      <section className="ecp-ubicacion">
        <div className="ecp-ubicacion__container">
          <h2 className="ecp-ubicacion__title">Ubicación</h2>
          <div className="ecp-ubicacion__maps">
            <div className="ecp-ubicacion__map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1731734400000!6m8!1m7!1s_8e88t1AL352yJUesyWEVA!2m2!1d19.35849589999999!2d-98.98039149999999!3f337.24!4f-9.1!5f0.7525749891599188"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vista de calle - ECOPREP"
              />
            </div>
            <div className="ecp-ubicacion__map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5885234567!2d-98.98219680000001!3d19.3586195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e29007ef259b%3A0x83430dd026943516!2sSan%20Francisco%2049%2C%20Los%20Reyes%2C%2056400%20Los%20Reyes%20Acaquilpan%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1731734400000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'auto' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - ECOPREP"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio
