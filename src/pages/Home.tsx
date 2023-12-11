import { useState } from 'react'
import backgroundImage from '../assets/hero-img.jpg'

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="flex items-center justify-center h-screen text-white" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', fontFamily: 'Libre Baskerville, serif' }}>
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the new game</h1>
        <button 
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 w-full"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}>Start game
        </button>   
        {openMenu && <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">What is "Lorem ipsum"?...</p>}
      </div>
    </section>
  )
}

export default Home;
