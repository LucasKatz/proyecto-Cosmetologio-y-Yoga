import Card from 'react-bootstrap/Card';
import '../pages/Clases.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





function Clases() {
  return (
    <div className='cardConteiner'>
          <Card className='card'>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675538226/niveles_d8eimf.png" />
        <Card.Body className='cardBody'>
          <Card.Text className='texto'>
            <Link  className='Link' to="/Personalizadas" >Personalizadas</Link>  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675538242/talleres_qan5wh.png" />
        <Card.Body className='cardBody'>
          <Card.Text  className='texto'>
          <Link  className='Link' to="/Niveles">Por Niveles</Link>
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="d-grid gap-2">
      <Button className='claseButton'  size="lg">
       ¡Reserva tu clase de prueba!
      </Button>
    </div>
    </div>
  );
}

export default Clases;