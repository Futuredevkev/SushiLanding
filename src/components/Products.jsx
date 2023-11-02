import { useContext } from "react";
import CartContext from "../Context/CartContext";

export function Products({ products }) {

  const { addItemToCart } = useContext(CartContext)


  return (
    <>
      <ul className="flex justify-center items-center flex-wrap gap-10 mt-5">
        {products.map((product) => (
          <div
            className="flex flex-col justify-start items-center bg-transparent shadow-lg rounded-lg gap-3"
            style={{ width: "320px", height: "433px" }}
            key={product.id}
          >
            <div
              className="w-full relative rounded-t-lg overflow-hidden"
              style={{ boxShadow: "0px 8px 10px #c0bdb9", height: "200px" }}
            >
              <img
                src={product.imagenes}
                className="w-full h-full object-cover rounded-t-lg max-w-full"
                alt={product.nombre}
              />
            </div>
            <div className="flex flex-col justify-center items-center p-5 gap-5">
              <h3 className="text-xl font-bold uppercase">{product.nombre}</h3>
              <p className="text-sm text-center">{product.descripcion}</p>
              <span className="text-lg font-bold text-orange-500">
                ${product.precio}
              </span>
              <button className="bg-orange-500 rounded-sm w-36 h-10 font-bold uppercase text-white" onClick={() => addItemToCart(product)} >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
