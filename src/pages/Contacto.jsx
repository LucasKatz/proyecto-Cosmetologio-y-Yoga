import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Contacto.css"
import Button from 'react-bootstrap/Button';

function Contacto() {
    return (
    <div className="body">       
        "
        <h1 className="tituloContacto">Contacto</h1>

        <div className="contenedorBody">
            
        <Button className="botonInstagram">
            <a className="href" href="https://www.instagram.com/holistic.bodyandmind/" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonInstagram">@holistic.bodyandmind</p>
            <FontAwesomeIcon className="iconInstagram" icon={faInstagram} />
            </a>
        </Button>


        <Button className="botonWhatsapp">
            <a className="href" href="http://" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonWhatsapp">¡Hablemos!</p>          
            <FontAwesomeIcon className="iconWhatsapp" icon={faWhatsapp} />
            </a>
        </Button>
        </div>

        <div>
            <div className="Feed">
                
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
            
            </div>
        </div>

    </div>
    )
}

export default Contacto