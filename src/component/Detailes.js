import React from 'react'

import ReactStars from 'react-stars'


const Detailes = ({ movie, filmshow }) => {

  return (
  
< div className='croix'>
       <div onMouseEnter={() => filmshow(false)} className="x">X</div>
       
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


