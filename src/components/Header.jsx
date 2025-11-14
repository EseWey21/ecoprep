import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header className="ecp-header">
      <Link to="/" className="ecp-brand" aria-label="ECOPREP inicio">
        <img
          className="ecp-brand__logo"
          src="https://ecoprep.com.mx/img/logo.jpeg"
          alt="Logo de ECOPREP"
        />
        <div className="ecp-brand__text">
          <div className="ecp-brand__title">ECOPREP</div>
          <div className="ecp-brand__subtitle">CURSO INTENSIVO PARA EL EXAMEN ECOEMS</div>
        </div>
      </Link>

      <nav className="ecp-header__nav" aria-label="Navegación principal">
        <Link 
          to="/" 
          className={`ecp-link ${location.pathname === '/' ? 'is-active' : ''}`}
        >
          Inicio
        </Link>
        <Link 
          to="/inscribete" 
          className="ecp-link ecp-link--cta"
        >
          Inscríbete
        </Link>
        <Link 
          to="/pruebate" 
          className={`ecp-link ${location.pathname === '/pruebate' ? 'is-active' : ''}`}
        >
          ¡Pruébate!
        </Link>
      </nav>
    </header>
  )
}

export default Header
