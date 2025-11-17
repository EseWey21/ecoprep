import './Inscribete.css'
import { FaTag, FaBook, FaFileAlt, FaCreditCard, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaUser, FaEnvelope, FaPhone, FaClipboardCheck } from 'react-icons/fa'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useMediaQuery } from '../hooks/useMediaQuery'
import calendario1 from '../assets/calendario/1.png'
import calendario2 from '../assets/calendario/2.png'
import calendario3 from '../assets/calendario/3.png'
import calendario4 from '../assets/calendario/4.png'
import calendario5 from '../assets/calendario/5.png'
import calendario6 from '../assets/calendario/6.png'
import calendario7 from '../assets/calendario/7.png'

function Inscribete() {
  const [currentPage, setCurrentPage] = useState(0)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    interes: ''
  })
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  // Detectar si es móvil
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  // Distancia mínima para detectar swipe (en px)
  const minSwipeDistance = 50
  
  const calendarios = [
    calendario1,
    calendario2,
    calendario3,
    calendario4,
    calendario5,
    calendario6,
    calendario7
  ]
  
  // Mostrar 1 imagen en móviles, 3 en desktop
  const itemsPerPage = isMobile ? 1 : 3
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

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    console.log('Touch started at:', e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    console.log('Swipe distance:', distance, 'Left:', isLeftSwipe, 'Right:', isRightSwipe)
    
    if (isLeftSwipe) {
      nextPage()
    } else if (isRightSwipe) {
      prevPage()
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validación del correo electrónico
    if (!formData.correo.includes('@') || !formData.correo.includes('.com')) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'El correo debe contener @ y .com',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: 'ecp-swal-popup',
          title: 'ecp-swal-title',
          htmlContainer: 'ecp-swal-text',
          timerProgressBar: 'ecp-swal-progress'
        }
      })
      return
    }

    // Validación del teléfono (exactamente 10 dígitos)
    if (!/^\d{10}$/.test(formData.telefono)) {
      Swal.fire({
        icon: 'error',
        title: 'Teléfono inválido',
        text: 'El teléfono debe tener exactamente 10 dígitos',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: 'ecp-swal-popup',
          title: 'ecp-swal-title',
          htmlContainer: 'ecp-swal-text',
          timerProgressBar: 'ecp-swal-progress'
        }
      })
      return
    }
    
    try {
      const response = await fetch('https://ecoback-tau.vercel.app/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreCompleto: formData.nombre,
          email: formData.correo,
          telefono: formData.telefono,
          interes: formData.interes === 'curso' ? 'curso_ecoeems' : 'asesorias_personalizadas'
        })
      })

      if (response.status === 201) {
        const data = await response.json()
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          html: `${data.message}<br><br>Por favor, revisa tu bandeja de entrada y la carpeta de <strong>SPAM</strong> para confirmar tu registro.`,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true,
          customClass: {
            popup: 'ecp-swal-popup',
            title: 'ecp-swal-title',
            htmlContainer: 'ecp-swal-text',
            timerProgressBar: 'ecp-swal-progress'
          }
        })
        // Limpiar el formulario
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          interes: ''
        })
      } else {
        throw new Error('Error al procesar el registro')
      }
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Hubo un problema al enviar tu registro. Por favor, intenta nuevamente.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: 'ecp-swal-popup',
          title: 'ecp-swal-title',
          htmlContainer: 'ecp-swal-text',
          timerProgressBar: 'ecp-swal-progress'
        }
      })
    }
  }

  return (
    <div className="ecp-page">
      <section className="ecp-inscribete-section">
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
      </section>

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
            
            <div 
              className="ecp-carrusel__content"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
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

      <section className="ecp-registro">
        <div className="ecp-registro__container">
          <h2 className="ecp-registro__titulo">Regístrate para asegurar tu lugar</h2>
          
          <form className="ecp-formulario" onSubmit={handleSubmit}>
            <div className="ecp-formulario__grupo">
              <label className="ecp-formulario__label">
                <FaUser className="ecp-formulario__icon" />
                Nombre Completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="ecp-formulario__input"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            <div className="ecp-formulario__grupo">
              <label className="ecp-formulario__label">
                <FaEnvelope className="ecp-formulario__icon" />
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                className="ecp-formulario__input"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="ecp-formulario__grupo">
              <label className="ecp-formulario__label">
                <FaPhone className="ecp-formulario__icon" />
                Número Telefónico
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="ecp-formulario__input"
                placeholder="10 dígitos"
                pattern="\d{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="ecp-formulario__grupo">
              <label className="ecp-formulario__label">
                <FaClipboardCheck className="ecp-formulario__icon" />
                ¿En qué estás interesado?
              </label>
              <div className="ecp-formulario__opciones">
                <label className="ecp-formulario__opcion">
                  <input
                    type="radio"
                    name="interes"
                    value="curso"
                    checked={formData.interes === 'curso'}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="ecp-formulario__radio"></span>
                  Curso preparación examen ECOEMS
                </label>
                <label className="ecp-formulario__opcion">
                  <input
                    type="radio"
                    name="interes"
                    value="asesorias"
                    checked={formData.interes === 'asesorias'}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="ecp-formulario__radio"></span>
                  Asesorías personalizadas
                </label>
              </div>
            </div>

            <button type="submit" className="ecp-formulario__btn">
              Enviar Registro
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Inscribete

