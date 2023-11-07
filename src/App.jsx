import "./App.css";
import { useState, useEffect } from "react"; // Agrega la importación de 'useState' desde React
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Basic/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import ShowFilters from "./components/Products/ShowFilters";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import CheckOutPage from "./components/checkout/CheckOutPage";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sushiGiratorio from "./imagenes/giphy.gif"
import Footer from "./components/Basic/Footer";
import HamburgerMenu from "./components/Navbar/HamburgerMenu";

export default function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (    
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={sushiGiratorio} alt="Sushi giratorio" className="rounded-full" style={{width:'400px', height:'400px'}} />
        </div>
      ) : (
        <CartProvider>
          <Navbar />
          <HamburgerMenu/>
          <Cart />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={800}>
              <Routes location={location}>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<ShowFilters />} />
                <Route path="/checkout" element={<CheckOutPage />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer/>
        </CartProvider>
      )}
    </div>
  )};
  


