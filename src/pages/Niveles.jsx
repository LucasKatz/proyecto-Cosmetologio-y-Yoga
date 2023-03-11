import "./Niveles.css";

function Niveles() {
  return (
    <div className="nivelesConteiner">
      <h2 className="pt-5" style={{ textAlign: "center" }}>
        <strong style={{ color: "#5B3619", fontFamily: 'Gilroy' }}> Por niveles</strong>
      </h2>
      <section className="row justify-content-center align-items-center">
        <h4 className="pt-5" style={{ textAlign: "center" }}>
          <strong style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>¿A qué me refiero?</strong>
        </h4>
        <div
          className="col-12 col-md-6 text-center pt-5"
          id="textConteiner"
          style={{ width: "51rem",}}
        >
          <p id="textConteiner" className="text-center m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            Estas clasificiaciones son a modo orientativo, porque como ya he
            mencionado, yoga es una aprendizaje constante, donde a veces se
            avanza, otras se retrocede.
          </p>
          <p id="textConteiner" className="text-justify m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            <strong>
              ¡Pero siempre estaremos buscando nuestra mejor versión!
            </strong>
          </p>
        </div>
        <div
        id="textConteiner"
          className="col-12 col-md-6 text-center pt-5"
          style={{ width: "51rem"}}
        >
          <p id="textConteiner" className="text-justify m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            <strong>Iniciación:</strong> Si recién comenzás en el yoga, lo ideal
            es poder establecer bases sólidas, ir poco a poco, descubriendo y
            experimentando con asanas adaptadas, usando sillas o elementos. Esto
            permitirá aprender a construir bien las posturas para mantenerlas de
            forma segura, evitando riesgos.{" "}
          </p>
          <p id="textConteiner" className="text-justify m-0 pb-5" style={{ color: "#5B3619" , fontFamily: 'Gilroy'}}>
            <strong>Intermedio:</strong> Una vez que la práctica va siendo mas
            fluida, es momento de ir un poquito más allá. La constancia y
            práctica son importantes, como así también el respeto y la
            aceptación de nuestros límites físicos.{" "}
          </p>
          <p id="textConteiner"className="text-justify m-0 pb-5" style={{ color: "#5B3619", fontFamily: 'Gilroy' }}>
            <strong>Avanzado:</strong>Cuando empieza a fluir la respiración,
            retomamos pronto al momento presente frente a diversas situaciones,
            podemos sostener por mas tiempo una asana, es cuando podríamos
            “subir” otro nivel.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Niveles;
