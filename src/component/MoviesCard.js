import React from 'react'
import useState from 'react-hook-use-state'
import Detailes from './Viewes/Detailes'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'



const MoviesCard = ({ films }) => {
  
  
 
  return (
  
      
        <div  className="Movies-Container">

          <Link style={{textDecoration:'none', color:'white' , textAlign:'center'}} to={`/films`}   state={films} >  <img src={films.posterurl} />

          <h3 >{films.name}</h3>

          <ReactStars className='ReactStars'
          value={films.rating}

          size={24}
          color2={'#ffd700'} />
      
          </Link>
          
  
              
            
            
        </div>
        
    
     
    
  )
}

export default MoviesCard