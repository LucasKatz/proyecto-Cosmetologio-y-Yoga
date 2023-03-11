import { Button, Figure } from "react-bootstrap";
import './Bio.css'

function Bio() {
  return (
    <div className="container p-5">
      <section className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 mx-5 my-0 w-auto">
          <img
            alt="Daniela"
            className="w-100"
            src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105408_om4zkz.jpg"
          />
        </div>
        <div
          className="col-12 col-md-6 text-center pt-4"
          style={{ width: "26rem", fontSize: "1.5rem "}}
        >
          <h2 id ="titleBio">
            <strong style={{ color: "#5B3619" , fontFamily: 'Gilroy'  }}>Hola, soy Daniela</strong>
          </h2>
          <p id ="titleBio" className="text-center m-0 ">
            <strong style={{ color: "#5B3619", fontFamily: 'Gilroy'  }}>
              Cosmetóloga y profesora de yoga.
            </strong>
          </p>
          <p id="textBio" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            Me considero una eterna aprendiz, familiera, amante de las
            aventuras, la naturaleza y el deporte.
          </p>
        </div>
      </section>
      <section className="row justify-content-center align-items-center pt-5">
        <div
          className="col-12 col-md-6 text-center pt-4"
          style={{ width: "51rem", fontSize: "1.5rem", fontFamily: 'Gilroy'  }}
        >
          <h2 id ="titleBio">
            <strong style={{ color: "#5B3619", fontFamily: 'Gilroy'  }}> Mi Historia</strong>
          </h2>
          <p id="textBio" className="text-center m-0 " style={{ color: "#5B3619", fontFamily: 'Gilroy'  }}>
            Crec&iacute; sin tener v&iacute;nculo con alternativas naturales,
            pero algo en mi me llev&oacute; a recorrer ese camino.
            Estudi&eacute; profesorado de Yoga y posteriormente un posgrando en
            Biomec&aacute;nica y Yoga. Complement&eacute; con diversos cursos de
            alimentaci&oacute;n saludable y vegetariana. Paralelamente,
            comenc&eacute; a estudiar cosmetolog&iacute;a, en donde
            aprend&iacute; much&iacute;simo, pero sobre esta rama
            &iexcl;Quer&iacute;a algo mas! Fue ah&iacute;, donde buscando y
            buscando, encuentro la piedra Guasha y los masajes faciales.
          </p>
        </div>
        <div
          className="col-12 col-md-6 text-center pt-5 mt-5"
          style={{ width: "51rem", fontSize: "1.5rem", fontFamily: 'Gilroy'  }}
        >
          <h2 id ="titleBio">
            <strong style={{ color: "#5B3619", fontFamily: 'Gilroy'  }}>
              {" "}
              Mi Visi&oacute;n del Bienestar
            </strong>
          </h2>
          <p id="textBio" className="text-center m-0 " style={{ color: "#5B3619", fontFamily: 'Gilroy'  }}>
            Es ver al cuerpo desde diferentes &quot;&aacute;ngulos&quot;,
            &quot;perspectivas&quot;, &quot;partes&quot;, en donde trabajaremos
            nuestro cuerpo f&iacute;sico, las emociones y los pensamientos a
            trav&eacute;s de las posturas (asanas), la relajaci&oacute;n y la
            meditaci&oacute;n.
          </p>
        </div>
      </section>
      <section>
        <div className="mt-5">
          <div className="row justify-content-between gallery">
            <Figure  className="col-xl-4 col-6  text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105407_n5eyzf.jpg"
              
              />
            </Figure>
            <Figure  className="col-xl-4 col-6  text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105409_r6omre.jpg"
               
              />
            </Figure>
            <Figure className=" col-xl-4 col-6  text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105408_om4zkz.jpg"
               
              />
            </Figure>
            <Figure  className="col-xl-4 col-6 text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677361530/plants/bio/Copia-de-20221205_102715_xgs0nd.jpg"
          
              />
            </Figure>
            <Figure  className="col-xl-4 col-6  text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105405_pnczux.jpg"
                
              />
            </Figure>
            <Figure  className="col-xl-4 col-6 text-center">
              <Figure.Image
                id="pictureBio"
                alt="imgData"
                src="https://res.cloudinary.com/dew1za4wz/image/upload/v1677293743/plants/bio/Copia-de-20221205_105406_r2lkci.jpg"
              />
            </Figure>
          </div>
        </div>
      </section>
      <div>
        <div className="d-grid" id="yogaConteiner">
          <Button className="claseButton" id="btnReserva" size="lg">
            <a
              className="href"
              href="https://api.whatsapp.com/send?phone=5493434667572"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="reserva"> ¿Y si hablamos?</p>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Bio;
