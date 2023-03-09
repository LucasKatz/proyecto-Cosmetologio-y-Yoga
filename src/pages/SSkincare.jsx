function SSkincare() {
  return (
    <>
      <h2 className="pt-3" style={{ textAlign: "center" }}>
        <strong style={{ color: "#5B3619" }}>Sobre Skincare</strong>
      </h2>
      <section className="row justify-content-center align-items-center">
        <img
          alt="SobreG"
          className="image img-fluid d-block w-100 m-0"
          height={"700"}
          id="slide"
          src="https://res.cloudinary.com/duqn8v8te/image/upload/v1678333967/20230106_145131_2_r3wqpt-min_gxskww.png"
        />
        <div
          className="col-12 col-md-6 text-center pt-4 pb-4"
          style={{ width: "51rem", fontSize: "1.5rem" }}
        >
           <h4 className="pb-3" style={{ textAlign: "center" }}>
        <strong style={{ color: "#5B3619" }}>¿Qué es Skincare?</strong>
      </h4>
          <p className="text-center m-0" style={{ color: "#5B3619" }}>
            Lucir una piel radiante y sana está íntimamente relacionado a los
            rituales de belleza domiciliarios, basados en la constancia y en el
            uso de cosméticos adecuados para cada piel. </p>
            <p className="text-center m-0" style={{ color: "#5B3619" }}>
            En este taller individual
            vamos a conocernos y vas a poder contarme sobre tus objetivos, tus
            rutinas, y voy a evaluar el estado de tu piel.Vas a aprender a
            buscar activos y no marcas del momento para diseñar tu rutina
            personalizada. </p>
            <p className="text-center m-0" style={{ color: "#5B3619" }}>
            Esta rutina incluirá regimen de ciudado AM y PM,
            mascarillas adecuadas, tips de masajes faciales o GuaSha. No incluye
            los productos sugeridos (es unicamente el plan o guía). </p>
            <p className="text-center m-0 pb-4" style={{ color: "#5B3619" }}>
            ¡Te espero!
          </p>
        </div>
      </section>
    </>
  );
}

export default SSkincare;
