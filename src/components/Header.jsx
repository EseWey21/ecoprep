
function Header() {
  return (
    <header className="ecp-header">
      <a href="/" className="ecp-brand" aria-label="ECOPREP inicio">
        <img
          className="ecp-brand__logo"
          src="https://ecoprep.com.mx/img/logo.jpeg"
          alt="Logo de ECOPREP"
        />
        <div className="ecp-brand__text">
          <div className="ecp-brand__title">ECOPREP</div>
          <div className="ecp-brand__subtitle">CURSO INTENSIVO PARA EL EXAMEN ECOEMS</div>
        </div>
      </a>

      <nav className="ecp-header__nav" aria-label="Navegación principal">
        <a href="/" className="ecp-link is-active">Inicio</a>
        <a href="/inscribete" className="ecp-link ecp-link--cta">Inscríbete</a>
        <a href="/pruebate" className="ecp-link">¡Pruébate!</a>
      </nav>
    </header>
  )
}

export default Header
