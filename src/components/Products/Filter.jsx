import { useState } from "react";
import { Products } from "./Products";

export function ProductsFilter({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (tipo) => {
    const filtered =
      tipo === "all"
        ? products
        : products.filter((product) => product.tipo === tipo);
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full mt-10 mb-10 text-xl font-bold botonCambios" style={{gap:'1rem'}}>
        <button
          className="bg-black text-white rounded-full w-24 h-10"
          onClick={() => filterProducts("all")}
        >
          Todos
        </button>
        <button
          className="bg-black text-white rounded-full w-24 h-10"
          onClick={() => filterProducts("sashimi")}
        >
          Sashimi
        </button>
        <button
          className="bg-black text-white rounded-full w-24 h-10"
          onClick={() => filterProducts("maki")}
        >
          Maki
        </button>
        <button
          className="bg-black text-white rounded-full w-24 h-10"
          onClick={() => filterProducts("nigiri")}
        >
          Nigiri
        </button>
      </div>

      <div className="products-container" style={{ height: "600px", overflowY: "auto" }}>
        <Products products={filteredProducts} />
      </div>
    </>
  );
}
