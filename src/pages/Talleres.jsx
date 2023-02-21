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
            <Link  className='Link' id='guasha' to="/Guasha" >Guasha</Link>  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675359391/skincare_nkjrnk.png" />
        <Card.Body className='cardBody'>
          <Card.Text  className='texto'>
          <Link  className='Link' id='skincare' to="/Skincare">Skincare</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Clases;