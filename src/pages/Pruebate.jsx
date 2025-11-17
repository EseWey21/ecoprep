import './Pruebate.css'
import { IoConstruct } from 'react-icons/io5'
import { FaHammer, FaScrewdriver } from 'react-icons/fa'
import { GiGearHammer } from 'react-icons/gi'
import { BiCog } from 'react-icons/bi'

function Pruebate() {
  return (
    <div className="pruebate-container">
      <div className="pruebate-content">
        <div className="pruebate-icon-wrapper">
          <div className="pruebate-construction-icon">
            <IoConstruct className="pruebate-main-icon" />
          </div>
          <FaHammer className="pruebate-tools-icon pruebate-tools-icon--1" />
          <FaScrewdriver className="pruebate-tools-icon pruebate-tools-icon--2" />
          <BiCog className="pruebate-tools-icon pruebate-tools-icon--3" />
          <GiGearHammer className="pruebate-tools-icon pruebate-tools-icon--4" />
        </div>
        
        <h1 className="pruebate-title">¡Próximamente Disponible!</h1>
        
        <div className="pruebate-message">
          <p className="pruebate-text">
            Estamos trabajando arduamente para traerte una experiencia increíble 
            donde podrás <strong>poner a prueba tus conocimientos</strong> y descubrir 
            qué tan preparado estás para tu <strong>examen ECOEMS</strong>.
          </p>
          <p className="pruebate-text">
            Pronto podrás evaluar tu nivel, identificar áreas de mejora 
            y asegurarte de estar completamente listo para alcanzar tu mejor puntuación.
          </p>
        </div>
        
        <p className="pruebate-footer-text">
          ¡Mantente atento a las actualizaciones!
        </p>
      </div>
    </div>
  )
}

export default Pruebate
