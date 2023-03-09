/* eslint-disable jsx-a11y/media-has-caption */
import Button from "react-bootstrap/Button";
import "../pages/SYoga.css";
function SYoga() {
  return (
    <section className="row justify-content-center align-items-center">
      <section className="hero">
        <video autoPlay controls loop className="hero__video">
          <source src="https://res.cloudinary.com/duqn8v8te/video/upload/v1678291950/Dise%C3%B1o_sin_t%C3%ADtulo_dawm24.mp4" />
        </video>
      </section>
      <div
        className="parrafoSY w-100 pt-5"
        style={{ width: "51rem", fontSize: "1.8rem" }}
      >
        <p className="parrafo m-4 pt-5 text-center w-50" style={{ color: "white" }}>
          <strong>
            {" "}
            “A través del yoga, la alimentación saludable y el cuidado del
            cuerpo, descubrí una conexión más profunda.”
          </strong>
        </p>

        <div className="d-grid" id="yogaConteiner">
          <Button className="claseButton mt-5" id="btnReserva" size="lg">
            <a
              className="href"
              href="https://api.whatsapp.com/send?phone=5493434667572"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="reserva"> Reserva tu clase de prueba</p>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default SYoga;
