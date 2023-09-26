import "./Personalizadas.css";

function Personalizadas() {
  return (
    <div className="personalizadasConteiner">
      <h2  className="pt-5" style={{ textAlign: "center" }}>
        <strong style={{ color: "#5B3619", fontFamily: 'Gilroy' }}> Personalizadas</strong>
      </h2>
      <section className="row justify-content-center align-items-center">
        <h4 className="pt-5" style={{ textAlign: "center" }}>
          <strong id="referencia" style={{ color: "#5B3619", fontFamily: 'Gilroy' }} >¿A qué me refiero?</strong>
        </h4>
        <div
          id="personConteiner"
          className="col-12 col-md-6 text-center pt-5"
          style={{ width: "51rem"}}
        >
          <p id="textConteiner" className="text-center m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            Es encontrarme con una respiración agitada, es descubrir un músculo
            que no se estira, es verme intentar un asana una y otra vez, sentir
            que cuesta, pero que muchas veces es una emoción que falta resolver.
            Es observar con asombro como “crece” la columna vertebral y crece la
            confianza.
          </p>
          <p  id="textConteiner" className="text-center m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy'}}>
            Yoga me implica estar presente y atenta a todo lo que hago, digo y
            pienso para seguir creciendo. Porque cuando dejo de estar presente,
            los viejos patrones vuelven a hacer de las suyas, es una práctica
            constante, diaria; pero que también muchísimas veces “vamos a
            salirnos del camino”, y también yoga es retomarlo con amor y con
            paciencia.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Personalizadas;
