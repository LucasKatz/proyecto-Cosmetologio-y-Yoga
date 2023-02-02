import Card from 'react-bootstrap/Card';
import '../pages/Clases.css'



function Clases() {
  return (
    <div className='cardConteiner'>
          <Card className='card'>
        <Card.Img className='picture' variant="top" src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1675359391/skincare_nkjrnk.png" />
        <Card.Body className='cardBody'>
          <Card.Text className='texto'>
            Skincare
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Clases;