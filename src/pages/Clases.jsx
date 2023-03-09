import Card from "react-bootstrap/Card";
import "../pages/Clases.css";
import { Link } from "react-router-dom";

function Clases() {
  return (
    <div>
      <div className="titulo">
    <h1 className="titleClases"> Clases </h1>
    </div>
    <div className="cardConteiner">
      <Card className="card">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678398707/body-and-mins_731-3_zpjmyr.jpg"
          variant="top"
        />
        <Card.Body className="cardBody">
          <Card.Text className="texto">
            <Link className="Link" id="Yoga" to="/Yoga">
              Yoga
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834018/feedHome_zpm8zu.jpg"
          variant="top"
        />
        <Card.Body className="cardBody">
          <Card.Text className="texto">
            <Link className="Link" id="Talleres" to="/Talleres">
              Talleres
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Clases;
