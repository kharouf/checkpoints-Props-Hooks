
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = ({ Text, setText }) => {
  return (
    <div className="Nav">
      <div className='Navbar'>
        <img src="netflix-logo.png" />
      </div>
      <div className="Nav-items">
          <ul className='nav-li'>
            <li><Link className='link' to="/Movies">Movies</Link> </li>
            <li><Link className='link' to="/Trending">Trending</Link></li>
            <li><Link className='link' to="/Tv">TV Series</Link></li>
      
          </ul>
          
        </div>
      <div className="login">
        <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Search Films' />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

    </div>

  )
}

export default Navbar