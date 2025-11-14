import { MdEmail } from 'react-icons/md'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
  const whatsappMessage = encodeURIComponent('Hola me interesa información sobre el curso')
  const whatsappLink = `https://wa.me/525652371464?text=${whatsappMessage}`

  return (
    <footer className="ecp-footer">
      <div className="ecp-footer__container">
        {/* Columna 1: Contáctanos */}
        <div className="ecp-footer__column">
          <h3 className="ecp-footer__title">Contáctanos</h3>
          <a href="mailto:ecoprep_edu@hotmail.com" className="ecp-footer__contact">
            <MdEmail className="ecp-footer__icon" />
            <span>ecoprep_edu@hotmail.com</span>
          </a>
        </div>

        {/* Columna 2: WhatsApp */}
        <div className="ecp-footer__column">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ecp-footer__whatsapp"
          >
            <FaWhatsapp className="ecp-footer__whatsapp-icon" />
            Escríbenos a WhatsApp
          </a>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="ecp-footer__column">
          <h3 className="ecp-footer__title">Síguenos en nuestras redes</h3>
          <div className="ecp-footer__social">
            <a
              href="https://www.instagram.com/ecoprep_curso?igsh=MTZwMDVyNjZ0bmt4cg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="ecp-footer__social-link"
            >
              <FaInstagram className="ecp-footer__icon" />
              <span>@ecoprep_curso</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581493048256&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="ecp-footer__social-link"
            >
              <FaFacebook className="ecp-footer__icon" />
              <span>EcoPrep</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
