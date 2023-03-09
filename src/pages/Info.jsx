import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import "./info.css";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="ButtonS">
        <Link
          className="LinkBS botonInstagram d-flex flex-row justify-content-between align-items-center"
          id="SYoga"
          to="/SYoga"
        >
          <span className="ml-5">Sobre Yoga</span>
          <img
            alt="pp"
            src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677630013/plants/Group_s6xkji.png"
          />
        </Link>

        <Link className="LinkB" id="SGuasha" to="/SGuasha">
          <Button className="botonInstagram">Sobre Gua Sha</Button>
        </Link>

        <Link className="LinkB" id="SSkincare" to="/SSkincare">
          <Button className="botonInstagram">Sobre Skincare</Button>
        </Link>
      </div>
    </div>
  );
}
export default Info;
