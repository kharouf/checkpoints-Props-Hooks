import React from 'react'
import useState from 'react-hook-use-state'
import Detailes from './Detailes'
import ReactStars from 'react-stars'



const MoviesCard = ({ films }) => {
  
  const [Show, setShow] = useState(false)
 
  return (
  
      
        <div  onClick={()=>{setShow(true)}} className="Movies-Container">

          <img src={films.posterurl} />

          <h3>{films.name}</h3>

          <ReactStars className='ReactStars'
          value={films.rating}

          size={24}
          color2={'#ffd700'} />
      
          
          
  
             {Show ? <Detailes movie={films} filmshow={setShow}/> : null} 
            
            
        </div>
        
    
     
    
  )
}

export default MoviesCard