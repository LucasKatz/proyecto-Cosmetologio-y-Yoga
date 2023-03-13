import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import "../pages/Contacto.css";
import "./info.css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row} from "react-bootstrap";

import YogaIcon from "../assets/yoga-icon.svg";
import GuaShaIcon from "../assets/gua-sha-icon.svg";
import SkincareIcon from "../assets/skincare-icon.svg";

function Info() {
  const data = [
    {
      id: 1,
      title: "¿Qué significa “Holístico”?",
      text: "Es ver al cuerpo desde diferentes “ángulos”, “perspectivas”, “partes”",
    },
    {
      id: 2,
      title: "¿Por dónde empezamos?",
      text: " Estoy aquí para que juntos aprendamos técnicas para nutrir nuestro cuerpo, interior y exteriormente.",
    },
    {
      id: 3,
      title: "¿Por qué “Holístico” es importante?",
      text: " Porque es en donde trabajaremos nuestro cuerpo físico, las emociones y los pensamientos a través de las posturas (asanas), la relajación y la meditación",
    },
  ];

  return (
    <div>
      <Carousel className="carousel" controls={false} indicators={false}>
        <Carousel.Item>
          <img
            alt="First slide"
            className="image d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676209487/carrousel3_t4zhnk.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <div className="containerBackground">
        <div>
          <Swiper
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper text-center"
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={50}
          >
            {data.map((item, key) => (
              <SwiperSlide key={key} className="banner">
                <Row>
                  <Col>
                    <h2 id="titleInfo">{item.title}</h2>
                    <p id ="textInfo"className="w-75 m-auto">{item.text}</p>
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="contenedorBody">
        <Link className="boton" id="SYoga" to="/SYoga">
          <span className="textoBotonInfo">Sobre Yoga</span>
          <div className="iconContainerInfo">
            <img alt="Yoga icon"  className="icon" id="iconYoga"  src={YogaIcon} />
          </div>
        </Link>

        <Link className="boton" id="SGuasha" to="/SGuasha">
          <span className="textoBotonInfo">Sobre Gua Sha</span>
          <div className="iconContainerInfo">
            <img alt="Gua Sha icon"  className="icon" id="iconGuasha"  src={GuaShaIcon} />
          </div>
        </Link>

        <Link className="boton mb-4" id="SSkincare" to="/SSkincare">
          <span className="textoBotonInfo">Sobre Skincare</span>
          <div className="iconContainerInfo">
            <img alt="Skincare icon"  className="icon"  id="iconSkincare" src={SkincareIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Info;
