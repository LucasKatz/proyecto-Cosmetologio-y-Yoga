import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function Home() {
  return (
    <div className='homeConteiner'>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          alt="First slide"
          className="d-block w-100"
          id='slide'
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676209487/carrousel3_t4zhnk.jpg"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Second slide"
          className="d-block w-100"
          id='slide'
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel4_ik65tf.jpg"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Third slide"
          className="d-block w-100"
          id='slide'
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel1_bdk80x.jpg"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Fourth slide"
          className="d-block w-100"
          id='slide'
          src="https://res.cloudinary.com/dfd5jte9n/image/upload/v1676130449/carrousel2_eyrgau.jpg"
        />

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
    <div className='picturesHome'>
            <div className="FeedHome">
                
              <div className="innerTextHome">REEL DE INSTAGRAM</div> 
              <div className="innerTextHome">REEL DE INSTAGRAM</div> 
              <div className="innerTextHome">REEL DE INSTAGRAM</div> 
              <div className="innerTextHome">REEL DE INSTAGRAM</div> 
            
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;