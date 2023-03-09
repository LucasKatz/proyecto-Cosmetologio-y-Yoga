import Card from "react-bootstrap/Card";
import "../pages/Clases.css";
import { Link } from "react-router-dom";

function Clases() {
  return (
    <div>
    <div className="titulo">
            <h1 className="titleClases"> Talleres </h1>
        </div>
    <div className="cardConteiner">
      <Card className="card">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678398704/body-and-mins_731-4_if73xt.jpg"
          variant="top"
        />
        <Card.Body className="cardBody">
          <Card.Text className="texto">
            <Link className="Link" id="guasha" to="/SGuasha">
              Guasha
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678398709/body-and-mins_731-2_fyqgnf.jpg"
          variant="top"
        />
        <Card.Body className="cardBody">
          <Card.Text className="texto">
            <Link className="Link" id="skincare" to="/SSkincare">
              Skincare
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Clases;
