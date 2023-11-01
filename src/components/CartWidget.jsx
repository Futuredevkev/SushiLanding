import cart from '../assets/cart-shopping-svgrepo-com.svg'
import { useState } from 'react'


export default function CartWidget() {
    const [count, Setcount] = useState(0)

  return (
    <div className='flex justify-center items-center gap-3'>

        <div className='relative'>
            <img className='w-10' src={cart} alt='cart'></img>
        </div>

         <div className={`absolute rounded-full w-6 h-6 text-center ${count > 0 ? 'bg-green-300' : 'bg-white'}`} style={{ right: '195px', top: '20px' }}>
             <span>{count}</span>
          </div>

          <div className='flex justify-center items-center gap-4'>
          <button className='text-3xl text-white' onClick={() => Setcount(count + 1)}>+</button>
          </div>

        </div>
  )
}
