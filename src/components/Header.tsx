import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return <header>
    <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/game">Game</NavLink></li>
    </ul>
  </header>
}

export default Header