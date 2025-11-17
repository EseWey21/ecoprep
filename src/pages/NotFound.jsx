import './NotFound.css'
import tristeImg from '../assets/triste.png'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img 
          src={tristeImg} 
          alt="Página no encontrada" 
          className="notfound-image"
        />
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/" className="notfound-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
