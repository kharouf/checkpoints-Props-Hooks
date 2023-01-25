import React from 'react'
import MoviesCard from './MoviesCard'
import movies from './Data'


const MovieList = ({Text}) => {
 
  
  return (
    <div className='Movies-liste'>
           
        {movies.filter(el=>el.name.toLowerCase().includes(Text.toLowerCase()))
        .map( el => 
          <MoviesCard films={el} />
         

          
        )}
       
      
    
     
    </div>
  )
}

export default MovieList