import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Game Title</h1>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className={`fixed top-0 right-0 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64 h-full bg-gray-900 text-white p-8`}>
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="space-y-4">
          <li><NavLink to="/" className="text-purple-500 hover:text-purple-400" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className="text-purple-500 hover:text-purple-400" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className="text-purple-500 hover:text-purple-400" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;