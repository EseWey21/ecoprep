import './Pruebate.css'
import construImg from '../assets/constru.png'

function Pruebate() {
  return (
    <div className="pruebate-container">
      <div className="pruebate-content">
        <div className="pruebate-icon-wrapper">
          <img 
            src={construImg} 
            alt="En construcción" 
            className="pruebate-main-image"
          />
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
