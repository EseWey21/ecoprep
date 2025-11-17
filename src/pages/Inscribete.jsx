import './Inscribete.css'
import { FaTag, FaBook, FaFileAlt, FaCreditCard, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import calendario1 from '../assets/calendario/1.png'
import calendario2 from '../assets/calendario/2.png'
import calendario3 from '../assets/calendario/3.png'
import calendario4 from '../assets/calendario/4.png'
import calendario5 from '../assets/calendario/5.png'
import calendario6 from '../assets/calendario/6.png'
import calendario7 from '../assets/calendario/7.png'

function Inscribete() {
  const [currentPage, setCurrentPage] = useState(0)
  
  const calendarios = [
    calendario1,
    calendario2,
    calendario3,
    calendario4,
    calendario5,
    calendario6,
    calendario7
  ]
  
  const itemsPerPage = 3
  const totalPages = Math.ceil(calendarios.length / itemsPerPage)
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }
  
  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage
    return calendarios.slice(start, end)
  }

  return (
    <div className="ecp-page">
      <h1 className="ecp-page__title">¡Inicia tu preparación hoy!</h1>
      
      <div className="ecp-inscribete__container">
        <div className="ecp-inscribete__columna-izquierda">
          <div className="ecp-precio">
            <div className="ecp-precio__tag">
              <FaTag className="ecp-precio__tag-icon" />
            </div>
            <h2 className="ecp-precio__titulo">INVERSIÓN TOTAL DEL CURSO</h2>
            <div className="ecp-precio__cantidad">$5,000</div>
            <div className="ecp-precio__detalles">
              <div className="ecp-precio__item">
                <FaCalendarAlt className="ecp-precio__icon" />
                <span>Duración del curso: 7 meses</span>
              </div>
              <div className="ecp-precio__item">
                <FaBook className="ecp-precio__icon" />
                <span>Curso Completo (Preparación integral)</span>
              </div>
              <div className="ecp-precio__item">
                <FaFileAlt className="ecp-precio__icon" />
                <span>Material Didáctico Incluido (Guías y exámenes)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ecp-inscribete__columna-derecha">
          <div className="ecp-pago">
            <FaCreditCard className="ecp-pago__icon" />
            <p className="ecp-pago__texto">
              ¿Necesitas facilidades? ¡Pregunta por nuestros <strong>PLANES DE PAGO</strong> flexibles! 
              Queremos que lo único que te preocupe sea estudiar.
            </p>
          </div>
        </div>
      </div>

      <section className="ecp-actividades">
        <div className="ecp-actividades__container">
          <h2 className="ecp-actividades__titulo">Conoce nuestro cronograma de actividades</h2>
          
          <div className="ecp-carrusel">
            <button 
              className="ecp-carrusel__btn ecp-carrusel__btn--prev"
              onClick={prevPage}
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>
            
            <div className="ecp-carrusel__content">
              {getCurrentItems().map((calendario, index) => (
                <div key={currentPage * itemsPerPage + index} className="ecp-carrusel__item">
                  <img 
                    src={calendario} 
                    alt={`Calendario mes ${currentPage * itemsPerPage + index + 1}`}
                    className="ecp-carrusel__img"
                  />
                </div>
              ))}
            </div>
            
            <button 
              className="ecp-carrusel__btn ecp-carrusel__btn--next"
              onClick={nextPage}
              aria-label="Siguiente"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <div className="ecp-carrusel__indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`ecp-carrusel__indicator ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inscribete

