// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "./info.css";

import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Button } from "react-bootstrap";

function Info() {
  const data = [
    {
      id: 1,
      title: "¿Qué significa “Holístico”?",
      text: "Es ver al cuerpo desde diferentes “ángulos”, “perspectivas”, “partes”"
    },
    {
      id: 2,
      title: "¿Por dónde empezamos?",
      text: " Estoy aquí para que juntos aprendamos técnicas para nutrir nuestro cuerpo, interior y exteriormente."
    },
    {
      id: 3,
      title: "¿Por qué “Holístico” es importante?",
      text: " Porque es en donde trabajaremos nuestro cuerpo físico, las emociones y los pensamientos a través de las posturas (asanas), la relajación y la meditación"
    },
    {
      id: 4,
      title: "¿Qué significa “Holístico”?",
      text: "Es ver al cuerpo desde diferentes “ángulos”, “perspectivas”, “partes”"
    }
  ];

  return (
    <div>
      <Carousel className="carousel" controls={false} indicators={false}>
        <Carousel.Item>
          <img
            alt="First slide"
            className="d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676209487/carrousel3_t4zhnk.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <Swiper className="mySwiper">
          {data.map((item, key) => (
            <SwiperSlide key={key}>
              <Row>
                <Col>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="Button-grl">
      <Button className="botonInstagram">
          <a>
            <p className="textoBotonInstagram">@holistic.bodyandmind</p>
            <div className="iconContainer1">
               />
            </div>
          </a>
        </Button>
      </div>

    </div>
    
  );
}
export default Info;
