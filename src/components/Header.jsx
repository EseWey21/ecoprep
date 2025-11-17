import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import StaggeredMenu from './StaggeredMenu'
import { useMediaQuery } from '../hooks/useMediaQuery'

function Header() {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const menuItems = [
    { label: 'Inicio', link: '/', ariaLabel: 'Ir a la página de Inicio' },
    { label: 'Inscríbete', link: '/inscribete', ariaLabel: 'Ir a la página de Inscripción' },
    { label: '¡Pruébate!', link: '/pruebate', ariaLabel: 'Ir a la página de Prueba' },
  ]

  return (
    <header className="ecp-header">
      <Link to="/" className="ecp-brand" aria-label="ECOPREP inicio">
        <img
          className="ecp-brand__logo"
          src={logoImg}
          alt="Logo de ECOPREP"
        />
        <div className="ecp-brand__text">
          <div className="ecp-brand__title">ECOPREP</div>
          <div className="ecp-brand__subtitle">CURSO INTENSIVO PARA EL EXAMEN ECOEMS</div>
        </div>
      </Link>

      {isMobile ? (
        <StaggeredMenu
          items={menuItems}
          displayItemNumbering={false}
          logoUrl={logoImg}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          accentColor="#FBCB43"
          colors={['#3B699C', '#1E3A5F']}
        />
      ) : (
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
      )}
    </header>
  )
}

export default Header
