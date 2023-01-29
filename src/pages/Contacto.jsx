import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Contacto.css"

function Contacto() {
    return (
    <div className="body">       
        
        <h1 className="tituloContacto">Contacto</h1>

        <div className="contenedorBody">
            
        <button className="botonInstagram">
            <p>holistic.bodyandmind</p>
            <a href="https://www.instagram.com/holistic.bodyandmind/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="rrss_social-icon" icon={faInstagram} />
            </a>
        </button>


        <button className="botonWhatsapp">
            <p>¡Hablemos!</p>          
            <a href="http://" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="rrss_social-icon" icon={faWhatsapp} />
            </a>
        </button>
        </div>

        <div>
            
        </div>

    </div>
    )
}

export default Contacto