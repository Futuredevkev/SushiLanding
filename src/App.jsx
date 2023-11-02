import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contacto from "./components/Contacto";
import { Routes, Route } from "react-router-dom";
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
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<ShowFilters />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
    </CartProvider>
  );
}

export default App;
