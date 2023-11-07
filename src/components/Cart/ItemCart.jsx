import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

export default function ItemCart({ item }) {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
      <img src={item.imagenes} alt={item.nombre} className="w-24 h-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4" />
      <div className="flex flex-col flex-grow">
        <p className="font-semibold text-lg mb-4">{item.nombre}</p>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <p className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2">
            Cantidad: {parseInt(item.amount, 10)}
          </p>
          <p className="w-full sm:w-auto">
            Total: ${parseInt(item.amount, 10) * parseInt(item.precio, 10)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button 
            onClick={() => addItemToCart(item)}
            className="w-full sm:w-auto bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mb-2 sm:mb-0 sm:mr-2"
          >
            Agregar
          </button>
          <button
            onClick={() => deleteItemToCart(item)}
            className="w-full sm:w-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
