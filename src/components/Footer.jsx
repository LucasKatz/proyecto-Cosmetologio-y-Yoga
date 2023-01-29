import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <div className="icon">
          <img
            alt=""
            className="icon_img"
            src="https://res.cloudinary.com/dew1za4wz/image/upload/v1674251802/plants/logo_ktpfxw.png"
            srcSet=""
          />
        </div>
        <div className="rrss">
          <a href="https://www.instagram.com/holistic.bodyandmind/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="rrss_social-icon" icon={faInstagram} />
          </a>
          <a href="https://wa.me/+numero" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="rrss_social-icon" icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
