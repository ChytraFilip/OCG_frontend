import { NavLink } from 'react-router-dom'
import './Header.css'
import barIcon from '../icons/bars-solid.svg';
import { useState, useEffect } from 'react'

const Header = () => {
  const [barClicked, setBarClicked] = useState("bar-nonactive");
  const [openBarMenu, setOpenBarMenu] = useState(false);
  const [menuClass, setMenuClass] = useState('navbar navbar-close')

  useEffect( ()=> {
    setMenuClass(openBarMenu ? 'navbar navbar-open' : 'navbar navbar-close')

    if(openBarMenu) {
      setBarClicked('bar-active')
    } else {
      setBarClicked('bar')
    }
    
  },[openBarMenu])

  return <header>
    <img  src={barIcon}
          className={barClicked} 
          alt="bar-icon"
          width="25px"
          onClick={ ()=> setOpenBarMenu(!openBarMenu)}
    />
    <nav className={menuClass}>
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
          <li><NavLink to="/signin">Sign in</NavLink></li>
          <li><NavLink to="/news">What's new</NavLink></li>
          <li><NavLink to="/game">Game</NavLink></li>
      </ul>
    </nav>
  </header>
}

export default Header