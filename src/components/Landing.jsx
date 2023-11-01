import imagenSushi from "../imagenes/pexels-ivan-samkov-8951248.jpg";

export default function Landing() {
  return (
    <div className="flex justify-center items-center w-full h-screen p-5 gap-5 flex-wrap">
      <div className="flex justify-center items-center">
        <img
          style={{ width: "430px", height: "600px" }}
          src={imagenSushi}
          alt="Sushi"
        />
      </div>

      <div className="flex justify-center items-start w-1/2 p-5 text-black uppercase text-lg flex-col gap-10">
        <h2 className="text-5xl font-bold">
          <span className="text-orange-500">Sushi</span>Rush
        </h2>
        <p className="text-lg">
          ¡Descubre el auténtico sabor del sushi en SushiRush! Sumérgete en una
          experiencia culinaria única con nuestra amplia gama de exquisitos
          rollos de sushi, cuidadosamente elaborados para satisfacer tus
          sentidos. En SushiRush, fusionamos la frescura de los ingredientes más
          selectos con la maestría de nuestros chefs, creando platillos que te
          transportarán a Japón en cada bocado. Disfruta de la mezcla perfecta
          de tradición y creatividad en cada rollo, desde los clásicos hasta las
          creaciones exclusivas de nuestra casa. Déjate llevar por los sabores,
          las texturas y la presentación impecable de nuestras delicias
          gastronómicas. Ya sea una comida rápida o una velada especial,
          SushiRush te brinda una experiencia inigualable en cada visita. ¡Únete
          a nosotros y déjate llevar por la emoción del sushi en su máxima
          expresión!
        </p>
      </div>
    </div>
  );
}
