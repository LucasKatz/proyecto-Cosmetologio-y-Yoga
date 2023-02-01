import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Contacto.css"

function Contacto() {
    return (
    <div className="body">       
        
        <h1 className="tituloContacto">Contacto</h1>

        <div className="contenedorBody">
            
        <button className="botonInstagram">
            <a className="href" href="https://www.instagram.com/holistic.bodyandmind/" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonInstagram">@holistic.bodyandmind</p>
            <FontAwesomeIcon className="iconInstagram" icon={faInstagram} />
            </a>
        </button>


        <button className="botonWhatsapp">
            <a className="href" href="http://" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonWhatsapp">¡Hablemos!</p>          
            <FontAwesomeIcon className="iconWhatsapp" icon={faWhatsapp} />
            </a>
        </button>
        </div>

        <div>
            <p>REEL DE INSTAGRAM</p>
        </div>

    </div>
    )
}

export default Contacto