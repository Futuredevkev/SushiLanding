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
      <div className="flex justify-center items-center w-full gap-20 mt-10 mb-10 text-xl font-bold">
        <button
          className="hover:bg-black hover:text-white hover:rounded-full w-24 h-10"
          onClick={() => filterProducts("all")}
        >
          Todos
        </button>
        <button
          className="hover:bg-black hover:text-white hover:rounded-full w-24 h-10"
          onClick={() => filterProducts("sashimi")}
        >
          Sashimi
        </button>
        <button
          className="hover:bg-black hover:text-white hover:rounded-full w-24 h-10"
          onClick={() => filterProducts("maki")}
        >
          Maki
        </button>
        <button
          className="hover:bg-black hover:text-white hover:rounded-full w-24 h-10"
          onClick={() => filterProducts("nigiri")}
        >
          Nigiri
        </button>
      </div>

      <Products products={filteredProducts} />
    </>
  );
}
