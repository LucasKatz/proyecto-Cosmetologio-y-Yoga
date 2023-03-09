import Button from "react-bootstrap/Button";
import "../pages/SYoga.css";
function SYoga() {
  return (
    <section className="row justify-content-center align-items-center pt-5">
      <iframe
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        height="450"
        src="https://res.cloudinary.com/duqn8v8te/video/upload/v1678291950/Dise%C3%B1o_sin_t%C3%ADtulo_dawm24.mp4"
        title="YouTube video player"
        width="500"
      />
      <div
        className="parrafoSY col-12 col-md-6 text-center pt-5 mt-5"
        style={{ width: "51rem", fontSize: "1.5rem" }}
      >
        <p className="text-center m-0 " style={{ color: "black" }}>
          “A través del yoga, la alimentación saludable y el cuidado del cuerpo,
          descubrí una conexión más profunda.”
        </p>
      </div>
      <Button className="botonWhatsapp"style={{ width: "45rem", fontSize: "20.1rem" }}>
        <a
          className="href"
          href="https://api.whatsapp.com/send?phone=5493434667572"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="textoBotonWhatsapp">¡Reserva tu clase de prueba!</p>
        </a>
      </Button>
    </section>
  );
}
export default SYoga;
