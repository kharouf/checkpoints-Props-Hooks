
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({Text,setText}) => {
  return (
    <div className="Nav">
    <div className='Navbar'>
        <img src="netflix-logo.png"  />
        <div className="Nav-items">
            <a href="#">Trending</a>
            <a href="">TV Series</a>
            <a href="">Movies</a>
            <a href="">Coming Soon</a>
        </div>
         
    </div>
    <div className="login">
           <input onChange={(e)=>setText(e.target.value)} type="text"  placeholder='Search Films'/>
           <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </div>
   
  )
}

export default Navbar