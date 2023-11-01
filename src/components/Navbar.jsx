import { useState } from 'react'
import sushiIcon from '../assets/sushi-svgrepo-com.svg'
import CartWidget from './CartWidget'
import './Navbar.css'


export default function Navbar() {
    const [selectedSection, setSelectedSection] = useState("SushiRush")

    const handleSectionClick = (section) => {
      setSelectedSection(section)
    }

  return (
    <div className='flex justify-around items-center h-28 w-full' style={{backgroundColor: '#000', borderBottom:'1px solid green'}}>

    <div className='flex justify-center items-center gap-3'>
    <img src={sushiIcon} alt='Sushi' className='w-20'></img>
    <h1 className='text-3xl font-bold uppercase text-white'><span className='text-green-200'>Sushi</span>Rush</h1>
    </div>

        <nav className='flex justify-center items-center gap-8 text-white font-bold text-lg'>
            <a className={`menu-item ${selectedSection === 'SushiRush' ? 'selected' : ''}`} onClick={() => handleSectionClick('SushiRush')} href='#'>SushiRush</a>
            <a className={`menu-item ${selectedSection === 'Pedir Sushi' ? 'selected' : ''}`} onClick={() => handleSectionClick('Pedir Sushi')} href='#'>Pedir Sushi</a>
            <a className={`menu-item ${selectedSection === 'Contacto' ? 'selected' : ''}`} onClick={() => handleSectionClick('Contacto')} href='#'>Contacto</a>
        </nav>

        <CartWidget />
    </div>
  )
}
