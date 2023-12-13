import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-purple-900 bg-opacity-50 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Game Title</h1>
      <nav className="flex items-center">
        <ul className="flex space-x-4 mr-4 items-center">
          <li><NavLink to="/" className="hover:text-purple-400">Home</NavLink></li>
          <li><NavLink to="/news" className="hover:text-purple-400">What's new?</NavLink></li>
          <li><NavLink to="/game" className="hover:text-purple-400">Game</NavLink></li>
        </ul>
        <div className="flex items-center">
          <NavLink to="/signin" className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 mr-4 rounded">Sign in</NavLink>
          <NavLink to="/signup" className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded">Sign up</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
