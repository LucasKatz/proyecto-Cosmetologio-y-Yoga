import "./SGuasha.css";

function SGuasha() {
  return (
    <div className="SGuashaConteiner">
      <h2 className="pt-3" style={{ textAlign: "center" }}>
        <strong style={{ color: "#5B3619" }}> Sobre Gua Sha</strong>
      </h2>
      <section className="row justify-content-center align-items-center">
        <img
          alt="SobreG"
          className="image img-fluid d-block w-100 m-0"
          height={"700"}
          id="slide"
          src="https://res.cloudinary.com/duqn8v8te/image/upload/v1678333970/20230106_145043_2_1_jbmrot-min_zjm1st.png"
        />

        <div className="guashaConteiners" id="guashaText"> 
        <h2 className="pt-3" style={{ textAlign: "center" }}>
          <strong style={{ color: "#5B3619" }}>¿Qué es Gua Sha?</strong>
        </h2>
        <div
          className="col-12 col-md-6 text-center pt-4"
          id="guashaConteiner"
        >
          <p id="textConteinerGuasha" className="text-center m-0 pb-5"  style={{ color: "#5B3619" }}>
            Gua Sha es un antiguo método que proviene de la medicina tradicional
            china. El término “Gua” se traduce como raspado y “Sha” como “arena
            o enfermedad”, con lo cual la traducción de esta técnica sería
            como:“raspar la enfermedad o lo malo”. En este taller aprenderemos
            a utilizar la piedra Gua Sha de diversas formas para poder atender
            las distintas necesidades de la piel. Sino cuestas con una piedra,
            no te preocupes, también veremos masajes faciales, en el cual solo
            vas a necesitar de tus manos, aceite...¡y un tiempo para vos!
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SGuasha;
