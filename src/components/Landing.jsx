import imagenSushi from "../imagenes/pexels-ivan-samkov-8951248.jpg.png";
import { useNavigate } from 'react-router-dom';
import './responsive.css'


export default function Landing() {

  const navigateToSushis = useNavigate();
    
  const handleGoToLanding = () => {
    navigateToSushis("/products");


    }
  return (
    <div className="flex justify-center items-center w-full h-screen p-5 gap-24 flex-wrap responsive">
      <div className="flex justify-center items-center">
        <img
          style={{ width: "400px", height: "400px" }}
          className="responsive"
          src={imagenSushi}
          alt="Sushi"
        />
      </div>

      <div className="flex justify-center items-start w-1/2 p-5 text-black uppercase text-lg flex-col gap-10 texto">
        <h2 className="text-5xl font-bold">
          <span className="text-black texto">Sushi made with special care</span>
        </h2>
        <p style={{fontSize:'15px'}}>
        Browse our menu to find your favorite sushi dishes, or try something new!
        Whether you re craving classic California rolls or adventurous Dragon rolls, we have something for everyone.
        </p>
        <button onClick={handleGoToLanding} className="uppercase w-[300px] bg-orange-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FFA500] before:to-[rgb(255, 127, 80)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Explorar  
      </button>
      </div>
    </div>
  );
}
