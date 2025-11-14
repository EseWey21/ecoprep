import './Inicio.css'
import alumnoImg from '../assets/alumno.jpeg'

function Inicio() {
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
    </div>
  )
}

export default Inicio
