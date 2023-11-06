import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import SushiSad from '../imagenes/noun-sad-cute-sushi-2866696.png'

export default function CheckOutPage() {
    const { cartItems } = useContext(CartContext);
    const navigateTo = useNavigate();

    const handleGoToSushi = () => {
        navigateTo("/");
    };


    let totalAmount = 0;

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            totalAmount += item.amount * item.precio;
        });
    }
    

    return (
        <div className="max-w-screen-xl mx-auto p-8">
            {cartItems.length === 0 && ( 
                <div className='flex justify-center items-center h-screen flex-col gap-20'>
                    <img className='w-64' src={SushiSad} alt='sad'/>
                    <p className='text-center font-bold uppercase text-4xl'>No hay productos disponibles</p>
                </div>
            )}

            {cartItems.length > 0 && ( 
                <div>
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
                            <h2 style={{ fontWeight: 'bold', fontSize: '25px', color: 'black' }}>
                                <p>Total: ${totalAmount}</p>
                            </h2>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Número de tarjeta:</label>
                            <input type="tel" id="card" name="card" className="border p-2 w-full rounded-md" placeholder="1234 5678 9012 3456"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Nombre completo:</label>
                            <input type="text" id="fullname" name="fullname" className="border p-2 w-full rounded-md" placeholder="Nombre Apellido"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Ciudad:</label>
                            <input type="text" id="city" name="city" className="border p-2 w-full rounded-md" placeholder="Ciudad"/>
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Direccion:</label>
                        <input type="text" id="Direction" name="Direction" className="border p-2 w-full rounded-md" placeholder="Ciudad"/>
                    </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Telefono:</label>
                            <input type="tel" id="tel" name="tel" className="border p-2 w-full rounded-md" placeholder="09..."/>
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
            )}
        </div>
    );
}
