import React from 'react'
import { useLocation } from 'react-router-dom'

import ReactStars from 'react-stars'


const Detailes = () => {
  const location = useLocation()
  const movie=location.state

  return (
  
< div className='croix'>
       
       
      <div className="Detailes-Container position ">
       
        <img src={movie.posterurl} />

        <h3>{movie.name}</h3>

        <h6> {movie.description}</h6>

        <ReactStars className='ReactStars'
          value={movie.rating}

          size={24}
          color2={'#ffd700'} />
      </div>
   </div>
  )
}

export default Detailes


