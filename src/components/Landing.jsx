import imagenSushi from '../imagenes/881926.jpg'; 

export default function Landing() {
  return (
    <div className='flex justify-center items-center w-full h-screen p-5'>
        <div className='flex justify-center items-center'>
            <img style={{width:'550px'}} src={imagenSushi} alt='Sushi' />
        </div>

        <div className='flex justify-center items-center w-1/2 p-5 text-white font-bold uppercase text-lg'>
            <p>Sakura Azul: Inicio modesto, chef Takashi, arte del sushi. Reputación por excelencia culinaria, ambiente acogedor. Desafíos con competidores. Mantuvo calidad, arraigo a tradición. Pasión por sushi perdurable, legado en sabores, experiencias compartidas. Refugio para amantes de lo auténtico. Tradición viva en cada plato, clientes diversos, historia de pasión y perseverancia.</p>
        </div>
    </div>
  )
}
