import { MdEmail, MdLocationOn } from 'react-icons/md'
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
          <a
            href="https://www.google.com/maps/place/San+Francisco+49,+Los+Reyes,+56400+Los+Reyes+Acaquilpan,+Méx./@19.3586094,-98.9804265,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1e29007ef259b:0x83430dd026943516!8m2!3d19.3586094!4d-98.9804265!16s%2Fg%2F11c1d6h2dr?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="ecp-footer__contact"
          >
            <MdLocationOn className="ecp-footer__icon" />
            <span>San Francisco 49, Los Reyes, 56400 Los Reyes Acaquilpan, Méx.</span>
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
          <div className="ecp-footer__phone">
            <p className="ecp-footer__phone-label">Para más dudas al:</p>
            <p className="ecp-footer__phone-number">Teléfono: 56-5237-1464</p>
          </div>
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
