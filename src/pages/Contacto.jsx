import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Contacto.css"
import Button from 'react-bootstrap/Button';

function Contacto() {
    return (
    <div className="body">       
        
        <h1 className="tituloContacto">Contacto</h1>

        <div className="contenedorBody">
            
        <Button className="botonInstagram">
            <a className="href" href="https://www.instagram.com/holistic.bodyandmind/" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonInstagram">@holistic.bodyandmind</p>
            <div className="iconContainer1"> 
            <FontAwesomeIcon className="iconInstagram" icon={faInstagram} />
            </div>
            </a>
        </Button>


        <Button className="botonWhatsapp">
            <a className="href" href="http://" rel="noopener noreferrer" target="_blank">
            <p className="textoBotonWhatsapp">¡Hablemos!</p>
            <div className="iconContainer2">        
            <FontAwesomeIcon className="iconWhatsapp" icon={faWhatsapp} />
            </div>  
            </a>
        </Button>
        </div>

        <div>
            <div className="Feed">
                
                <div className="innerText"><img src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834659/body-and-mind_2-S_ypjn3a.jpg" alt="" /></div> 
                <div className="innerText"><img src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834659/body-and-mind_1-S_i5a2x2.jpg" alt="" /></div> 
                <div className="innerText"><img src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834660/body-and-mind_4-S_qjbprn.jpg" alt="" /></div> 
                <div className="innerText"><img src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834660/body-and-mind_3-S_tdrztc.jpg" alt="" /></div> 
            
            </div>
        </div>

    </div>
    )
}

export default Contacto