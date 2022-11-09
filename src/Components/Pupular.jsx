import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'

// CSS
import '../index.css'
import '@splidejs/react-splide/css';

function Pupular() {
  
  const [popular, setPopular] = useState([])
  
  useEffect(() =>{
    getPopular()
  },[])
  
  const getPopular = async () => {
    
    const check = localStorage.getItem('popular')
    
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json();
      
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      console.log(data.recipes);
      setPopular(data.recipes)
    }
  }
  
  return (
    <div className='popular-conteiner'>
      <Splide options={{
            perPage: 2,
            gap: "5rem",
            arrows: false,
            pagination: false,
            drag: "free",
            breakpoints: {
            2425: { perPage: 4, gap: "2rem",},
            1945: { perPage: 3, gap: "2rem",},
            1440: { perPage: 2, gap: "2rem",},
            950: { perPage: 1, gap: "2rem",},
            640 : { gap: 0 },
            },
          }}>
        
      {popular.map((recipe) => {
        return(
          <SplideSlide key={recipe.id}>
          <div  className='popular-card'>
            
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
          </SplideSlide>
        );
      })}
      </Splide>
    </div>
  )
}

export default Pupular