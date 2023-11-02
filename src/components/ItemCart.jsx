import { useContext } from 'react'
import CartContext from '../Context/CartContext'


export default function ItemCart({ item }) {

  
  const {deleteItemToCart, addItemToCart} = useContext(CartContext)
  

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center gap-4">
      <img src={item.imagenes} alt={item.nombre} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold flex-grow">{item.nombre}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => addItemToCart(item)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Agregar
            </button>
            <button
              onClick={() => deleteItemToCart()}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p>Cantidad: {parseInt(item.amount, 10)}</p>
          <p>Total: ${parseInt(item.amount, 10) * parseInt(item.precio, 10)}</p>
          </div>
          </div>
          </div>
        
  );
}
