import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contacto from "./components/Contacto";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ShowFilters from "./components/ShowFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CartContext";
import CheckOutPage from "./components/CheckOutPage";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation();

  return (    
    <CartProvider>
    <Navbar />
      <Cart />
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={800}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<ShowFilters />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
          </CSSTransition>
          </TransitionGroup>
    </CartProvider>
  );
}

export default App;
