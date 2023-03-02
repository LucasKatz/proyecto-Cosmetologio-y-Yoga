import Button from "react-bootstrap/Button";
import "../pages/SYoga.css";
function SYoga() {
  return (
    <>
      <iframe
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        border="0"
        height="500"
        src="https://www.youtube.com/embed/rLm_aSP369M"
        title="YouTube video player"
        width="100%"
      />
      <div>
        <p className="Parrafo">
          “A través del yoga, la alimentación saludable y el cuidado del cuerpo,
          descubrí una conexión más profunda.”
        </p>
        <Button className="BotonWhatsapp">
          <a
            className="href"
            href="https://api.whatsapp.com/send?phone=5493434667572"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="textoBotonReser">Reserva tu clase de prueba!</p>
          </a>
        </Button>
      </div>
    </>
  );
}
export default SYoga;
