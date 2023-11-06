import React from 'react'
import sushiIcon from "../assets/ball-svgrepo-com.svg";
import facebook from '../assets/facebook-svgrepo-com.svg'
import ig from '../assets/instagram-svgrepo-com.svg'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <img src={sushiIcon} alt="SushiRush" className="h-8 mr-2" />
          <span className="text-xl font-semibold">SushiRush</span>
        </div>
        <p className="text-center mb-4">Regístrate para conocer nuestras novedades</p>
        <div className="flex items-center justify-between w-full max-w-xs mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-2/3 px-4 py-2 rounded-l border text-gray-900"
          />
          <button className="w-1/3 bg-gray-600 rounded-r px-4 py-2">Registrarse</button>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <div>
            <a href="https://wa.me/598094908020">Whatsapp</a>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <img className='w-8' src={ig} alt='ig'/>
            <img className='w-8' src={facebook}alt='FB'/> 
          </div>
        </div>
        <div className="border-t border-gray-300 w-full mb-4" />
        <div className="flex items-center justify-center space-x-4">
          <a href="https://www.linkedin.com/in/kevin-moreira-3788b1272/" target='_blank' className="text-blue-500">LinkedIn</a>
          <a href="https://github.com/Futuredevkev" target='_blank' className="text-gray-500">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
