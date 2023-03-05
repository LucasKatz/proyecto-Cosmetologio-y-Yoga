import Card from "react-bootstrap/Card";
import "../pages/Clases.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Clases() {
  return (
    <div>
        <div className="titulo">
            <h1 className="titleClases"> Yoga </h1>
        </div>
      <div className="cardConteiner">
        <Card className="card">
          <Card.Img
            className="picture"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675538242/talleres_qan5wh.png"
            variant="top"
          />
          <Card.Body className="cardBody">
            <Card.Text className="texto">
              <Link className="Link" id="personalizadas" to="/Personalizadas">
                Personalizadas
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            className="picture"
            src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675538242/talleres_qan5wh.png"
            variant="top"
          />
          <Card.Body className="cardBody">
            <Card.Text className="texto">
              <Link className="Link" id="niveles" to="/Niveles">
                Por Niveles
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="d-grid gap-2" id="yogaConteiner">
        <Button className="claseButton" id="btnReserva" size="lg">
          <a     className="href"
            href="https://api.whatsapp.com/send?phone=5493434667572"
            rel="noopener noreferrer"
            target="_blank">
            <p className="reserva"> ¡Reserva tu clase de prueba!</p>
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Clases;
