import cart from '../assets/cart-shopping-svgrepo-com.svg'


export function Products({ products }) {

  return (
    <div className="flex justify-center items-center h-screen">
      <ul>
        {products.map(product => (
          <li className='flex justify-center items-center text-white' key={product.id}>
            <div className="card flex justify-center items-center flex-col">
              <h3 className="">{product.nombre}</h3>
              <img src={product.imagenes} alt={product.nombre} style={{}} />
              <p>Precio: ${product.precio}</p>
              <button onClick={cart}></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}