import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

export function Products({ products }) {

  const { addItemToCart } = useContext(CartContext)
  

  return (
    <>
      <ul className="flex justify-center items-center flex-wrap gap-5 mt-5">
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
              <p className="text-lg text-center">{product.descripcion}</p>
              <span className="text-lg font-bold text-orange-500">
                ${product.precio}
              </span>
              <button onClick={() => addItemToCart(product)}
  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
  title="Add New"
>
  <svg
    className="stroke-orange-400 fill-none group-hover:fill-orange-800 group-active:stroke-orange-200 group-active:fill-orange-600 group-active:duration-0 duration-300"
    viewBox="0 0 24 24"
    height="50px"
    width="50px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    strokeWidth="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path strokeWidth="1.5" d="M8 12H16"></path>
    <path strokeWidth="1.5" d="M12 16V8"></path>
  </svg>
</button>

            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
