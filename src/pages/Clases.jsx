import Card from 'react-bootstrap/Card';
import '../pages/Clases.css'

function Clases() {
  return (
    <div className='cardConteiner'>
      <Card>
        <Card.Body className='card'>
        <Card.Img src='./assets/images/yoga.jpg' variant="top"  />
          <button className='cardButton'>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body className='card'>
        <Card.Img src="holder.js/100px180"  variant="top" />
          <button className='cardButton'>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Clases;