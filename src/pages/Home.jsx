import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="homeConteiner">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            alt="First slide"
            className="d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676209487/carrousel3_t4zhnk.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Second slide"
            className="d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel4_ik65tf.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Third slide"
            className="d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel1_bdk80x.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Fourth slide"
            className="d-block w-100"
            id="slide"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel2_eyrgau.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <section className="infoHome">
        <div className="vision">
          <h1>Mi Vision</h1>
          <p className="miVisionTexto">
            Mi propósito es ayudarte a crear <span>tu mejor versión</span>: con
            prácticas de yoga adecuadas a tus tiempos y adaptadas a lo que
            necesites combinadas con técnicas de cuidados corporales amables.{" "}
          </p>
        </div>
        <div className="testimonios">
          <h1>Testimonios</h1>
          <p className="miVisionTexto">
            Como trabajo en la computadora todo el dia, me ayudo a estar mas consciente de mi cuerpo y tomarme el tiempo para hacer algunos estiramientos cuando lo necesito{" "}
            </p>

          <p className="miVisionTexto">
            Siento menos dolor de espalda. Me ayudo a mejorar mi postura{" "}
          </p>

          <p className="miVisionTexto">
            A través del yoga, pude afrontar situaciones estresantes de forma mas positiva{" "}
          </p>
          
        </div>
        <div className="picturesHome">
          <div className="FeedHome">
            <div className="innerTextHome">
              <a
                className="href"
                href="https://www.instagram.com/holistic.bodyandmind/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834659/body-and-mind_2-S_ypjn3a.jpg"
                />
              </a>
            </div>
            <div className="innerTextHome">
              <a
                className="href"
                href="https://www.instagram.com/holistic.bodyandmind/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834659/body-and-mind_1-S_i5a2x2.jpg"
                />
              </a>
            </div>
            <div className="innerTextHome">
              <a
                className="href"
                href="https://www.instagram.com/holistic.bodyandmind/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834660/body-and-mind_4-S_qjbprn.jpg"
                />
              </a>
            </div>
            <div className="innerTextHome">
              <a
                className="href"
                href="https://www.instagram.com/holistic.bodyandmind/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834018/FeedIg3_dywt3g.jpg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
