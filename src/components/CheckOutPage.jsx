import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckOutPage() {

    const { cartItems, total } = useContext(CartContext)

    const navigateTo = useNavigate();
    
      const handleGoToSushi = () => {
        navigateTo("/");


        }

    return (
      <div className="max-w-screen-xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4 text-center uppercase">Detalles del Pago</h1>
          {cartItems.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b border-black">
                  <div className="w-28 h-28 mr-4">
                      <img src={item.imagenes} alt={item.nombre} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div>
                      <p className="font-bold uppercase text-lg">{item.nombre}</p>
                      <p>Cantidad: {item.amount}</p>
                      <p>Precio: ${item.precio}</p>
                      <p>Total: ${item.amount * item.precio}</p>
                  </div>
              </div>
          ))}
          <div className="flex justify-between mt-8 gap-10">
          <div className='flex justify-center items-center'>
          <h2 style={{fontWeight:'bold', fontSize:'25px', color:'black'}}>Total: ${total}</h2>
          </div>
          <div className='flex justify-center items-center gap-5'>
              <button className="bg-orange-500 text-white w-60 py-3 rounded-md hover:bg-red-600 uppercase font-bold">
                  Pagar
              </button>
              <button onClick={handleGoToSushi} className="bg-red-500 text-white w-60 py-3 rounded-md hover:bg-orange-600 uppercase font-bold">
              X
          </button>
          </div>
              
          </div>
      </div>
  );
}







