import Card from 'react-bootstrap/Card';
import '../pages/Clases.css'
import { Link } from 'react-router-dom';



function Clases() {
  return (
    <div className='cardConteiner'>
          <Card className='card'>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675538226/niveles_d8eimf.png" />
        <Card.Body className='cardBody'>
          <Card.Text className='texto'>
            <Link id='Yoga'  className='Link' to="/Yoga" >Yoga</Link>  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676834018/feedHome_zpm8zu.jpg" />
        <Card.Body className='cardBody'>
          <Card.Text  className='texto'>
          <Link id='Talleres' className='Link' to="/Talleres">Talleres</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Clases;