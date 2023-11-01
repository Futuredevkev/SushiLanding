import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contacto from "./components/Contacto";
import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import ShowFilters from "./components/ShowFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CartContext";

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
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </CartProvider>
  );
}

export default App;
