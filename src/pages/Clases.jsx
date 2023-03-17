import Card from "react-bootstrap/Card";
import "../pages/Clases.css";


function Clases() {
  return (
    <div className="classConteiner">
      <div className="titulo">
    <h1 className="titleClases"> Clases </h1>
    </div>
      <Card className="card">
        <a href="./Yoga">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678560590/clases_2-min_xdzvlo.jpg"
          variant="top"
        />
        </a>
      </Card>
      <Card className="card">
      <a href="./Talleres">
        <Card.Img
          className="picture"
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1678560590/clases_1-min_tqk5e7.jpg"
          variant="top"
        />
        </a>
      </Card>
    </div>
  );
}

export default Clases;
