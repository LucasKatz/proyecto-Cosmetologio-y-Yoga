import Card from "react-bootstrap/Card";
import "../pages/Clases.css";
import { Link } from "react-router-dom";

function Clases() {
  return (
    <div className="classConteiner">
    <div className="titulo">
            <h1 className="titleClases"> Talleres </h1>
        </div>
      <Card className="card">
      <a href="/SGuasha">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678562080/clases_3_ilqpm9.jpg"
          variant="top"
        />
        </a>
      </Card>
      <Card>
        <a href="/SSkincare">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678560580/WhatsApp_Image_2023-03-11_at_14.58.35-min_qefndh.jpg"
          variant="top"
        />
        </a>
      </Card>
    </div>
  );
}

export default Clases;
