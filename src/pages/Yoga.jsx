import Card from "react-bootstrap/Card";
import "../pages/Clases.css";
import Button from "react-bootstrap/Button";

function Clases() {
  return (
    <div className="classConteiner" id="classConteinerYoga">
      <div className="titulo">
        <h1 className="titleClases"> Yoga </h1>
      </div>

      <Card className="card">
        <a href="/Personalizadas">
          <Card.Img
            className="picture"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678562080/clases_4_lubskt.jpg"
            variant="top"
          />
        </a>
      </Card>

      <Card>
        <a href="/Niveles">
          <Card.Img
            className="picture"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678560580/WhatsApp_Image_2023-03-11_at_14.58.52-min_xzgj4b.jpg"
            variant="top"
          />
        </a>
      </Card>

      <div className="contenedorBody">
        <Button className="boton" style={{ backgroundColor: "#C87E5D" }}>
          <a
            className="href"
            href="https://api.whatsapp.com/send?phone=393398228987"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="textoBoton mx-auto">
              ¡Reserva tu clase de prueba!
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Clases;
