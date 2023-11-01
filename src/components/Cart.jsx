import  { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import cart from './cart.module.css';
import ItemCart from "./ItemCart";


export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div className={cart.cartContainer}>
      <div onClick={() => {setCartOpen(!cartOpen)}} className={cart.buttonCartContainer}>
        <div className={cart.buttonCart}>
          {!cartOpen ? (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g id="Ikon">
                <path d="m26.6387 7h-18.9178l-.7722-2.3164a1 1 0 0 0 -.9487-.6836h-3a1 1 0 0 0 0 2h2.2793l.76 2.28 2.6116 10.4475a2.9958 2.9958 0 0 0 2.9106 2.2725h13.7442a2.9892 2.9892 0 0 0 2.9589-2.5068l1.334-8a3.0182 3.0182 0 0 0 -2.9599-3.4932zm.9873 3.1641-1.334 8.0005a.9958.9958 0 0 1 -.9863.8354h-13.7442a.9982.9982 0 0 1 -.97-.7578l-2.3107-9.2422h18.3579a1.0049 1.0049 0 0 1 .9873 1.1641z" />
                <path d="m22 22a3 3 0 1 0 3 3 3.0033 3.0033 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1.0009 1.0009 0 0 1 -1 1z" />
                <path d="m14 22a3 3 0 1 0 3 3 3.0033 3.0033 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1.0013 1.0013 0 0 1 -1 1z" />
                <path d="m19 12v4a1 1 0 0 1 -2 0v-4a1 1 0 0 1 2 0zm4-1a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1-1zm-10 0a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1-1z" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="line"
              viewBox="0 0 64 64"
            >
              <path
                d="M62,55.184V31.5a3,3,0,0,0-3-3H20.5a3,3,0,0,0-3,3V55.184A3,3,0,0,0,15.5,58v3a3,3,0,0,0,3,3H61a3,3,0,0,0,3-3V58A3,3,0,0,0,62,55.184ZM46.75,37.5a3,3,0,0,1,3-3H53a3,3,0,0,1,3,3v3.25a3,3,0,0,1-3,3H49.75a3,3,0,0,1-3-3Zm-22.25-3H41.273a1,1,0,0,1,0,2H24.5a1,1,0,0,1,0-2Zm0,7.25H37.648a1,1,0,0,1,0,2H24.5a1,1,0,0,1,0-2Zm0,7.25H55a1,1,0,0,1,0,2H24.5a1,1,0,0,1,0-2ZM62,61a1,1,0,0,1-1,1H18.5a1,1,0,0,1-1-1V58a1,1,0,0,1,1-1H30.3a1,1,0,0,1,.708.293l1.828,1.828A2.978,2.978,0,0,0,34.953,60h9.594a2.978,2.978,0,0,0,2.121-.879L48.5,57.293A1.009,1.009,0,0,1,49.2,57H61a1,1,0,0,1,1,1Z"
                style="fill: rgb(0, 0, 0);"
                fill="#c4a2fc"
              ></path>
              <path
                d="M45.5,9.016H9.369L8.784,2.722A2.987,2.987,0,0,0,5.8,0H1A1,1,0,0,0,1,2H5.8a1,1,0,0,1,1,.908l2.87,30.87A2.986,2.986,0,0,0,12.648,36.5H14.7a4.625,4.625,0,1,0,7.6,0H33.848a4.625,4.625,0,1,0,7.6,0H43.5a2.986,2.986,0,0,0,2.987-2.722l2-21.484A3,3,0,0,0,45.5,9.016ZM10.553,21.758l-1-10.742H20.594l.333,10.742ZM18.5,41.75a2.625,2.625,0,1,1,2.625-2.625A2.629,2.629,0,0,1,18.5,41.75ZM12.648,34.5a1,1,0,0,1-.995-.908l-.914-9.834h10.25L21.322,34.5Zm20.235,0h-9.56L22.99,23.758H33.216Zm.395-12.742H22.928L22.6,11.016H33.611Zm4.37,19.992a2.625,2.625,0,1,1,2.625-2.625A2.629,2.629,0,0,1,37.648,41.75Zm6.85-8.157a.994.994,0,0,1-.995.907H34.885l.333-10.742H45.412Zm1.1-11.835H35.279l.334-10.742H45.5a1,1,0,0,1,.995,1.092Z"
                style="fill: rgb(83, 202, 173);"
                fill="#151a6a"
              ></path>
            </svg>
          )}
        </div>
        {!cartOpen && <div className={cart.productsNumber}>{productsLength}</div>}
      </div>

      {cartItems && cartOpen && (
        <div>
          <h2>Tu carrito</h2>
      
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <div>
              {cartItems.map((item, i) => {
                return <ItemCart key={i} item={item} />;
              })}
            </div>
          )}
        </div>
      )}

      <h2>Total: ${total}</h2>
    </div>
  );
}
