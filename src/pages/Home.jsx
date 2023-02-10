import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function Home() {
  return (
    <div className='homeConteiner'>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <section className='infoHome'>
    <div className='vision'>
    <h1>Mi Vision</h1>
    <p className='miVisionTexto'>Mi propósito es ayudarte a crear <span>tu mejor versión</span>: con prácticas de yoga adecuadas a tus tiempos y adaptadas a lo que necesites combinadas con técnicas de cuidados corporales amables.  </p>
    </div>
    <div className='testimonios'>
    <h1>Testimonios</h1>
    <p className='miVisionTexto'>Mi propósito es ayudarte a crear <span>tu mejor versión</span>: con prácticas de yoga adecuadas a tus tiempos y adaptadas a lo que necesites combinadas con técnicas de cuidados corporales amables.  </p>
    </div>
    <div>
            <div className="Feed">
                
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
               <p className="innerText">REEL DE INSTAGRAM</p> 
            
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;