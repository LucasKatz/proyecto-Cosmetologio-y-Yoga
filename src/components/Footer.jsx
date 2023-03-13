import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BodyAndMindLogo from "../assets/logo_footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container h-100 d-flex justify-content-between align-items-center">
        <img alt="Body & Mind" src={BodyAndMindLogo} />
        <div className="w-auto media">
          <a
            href="https://www.instagram.com/holistic.bodyandmind/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon alt="Instagram icon" id="faInstagram" icon={faInstagram} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=393398228987"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              alt="Facebook icon"
              className="ms-4"
              id="faWhatsapp"
              icon={faWhatsapp}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;