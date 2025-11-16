import './Inicio.css'
import alumnoImg from '../assets/alumno.jpeg'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

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

      <section className="ecp-ofertas">
        <div className="ecp-ofertas__container">
          <div className="ecp-ofertas__left">
            <h2 className="ecp-ofertas__title">¿Qué ofrecemos?</h2>
            <p className="ecp-ofertas__description">
              Nuestro curso intensivo está diseñado para brindarte las herramientas necesarias para dominar el examen ECOEMS. Con un enfoque práctico y personalizado, te preparamos para cada sección del examen, asegurando que adquieras el conocimiento y la confianza para tener éxito.
            </p>
          </div>
          
          <div className="ecp-ofertas__right">
            <ScrollStack
              itemDistance={200}
              itemStackDistance={30}
              baseScale={0.9}
              stackPosition="20%"
              scaleEndPosition="10%"
              useWindowScroll={false}
            >
              <ScrollStackItem>
                <h3 className="ecp-stack-card__title">Atención personalizada</h3>
                <p className="ecp-stack-card__text">
                  Enfoque individualizado para cada estudiante, adaptándonos a tu ritmo y necesidades específicas.
                </p>
              </ScrollStackItem>
              
              <ScrollStackItem>
                <h3 className="ecp-stack-card__title">Profesores especializados por materia</h3>
                <p className="ecp-stack-card__text">
                  Expertos en cada área del examen ECOEMS, con amplia experiencia en preparación de estudiantes.
                </p>
              </ScrollStackItem>
              
              <ScrollStackItem>
                <h3 className="ecp-stack-card__title">Material de estudio actualizado</h3>
                <p className="ecp-stack-card__text">
                  Guías de trabajo y recursos didácticos constantemente actualizados según el temario oficial.
                </p>
              </ScrollStackItem>
              
              <ScrollStackItem>
                <h3 className="ecp-stack-card__title">Asesorías personalizadas</h3>
                <p className="ecp-stack-card__text">
                  Para estudiantes desde primaria hasta nivel superior, cubriendo todas las etapas educativas.
                </p>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio
