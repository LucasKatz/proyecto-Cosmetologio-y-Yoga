import Card from 'react-bootstrap/Card';
import '../pages/Clases.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





function Clases() {
  return (
    <div >
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
    </div>

    <div className="d-grid gap-2" id='yogaConteiner'>
      <Button className='claseButton' id="btnReserva"  size="lg">
        <p className='reserva'> ¡Reserva tu clase de prueba!</p>
      </Button>
    </div>
</div>
  );
}

export default Clases;