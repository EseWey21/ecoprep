import './Inscribete.css'
import { FaTag, FaBook, FaFileAlt, FaCreditCard, FaCalendarAlt } from 'react-icons/fa'

function Inscribete() {
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
    </div>
  )
}

export default Inscribete

