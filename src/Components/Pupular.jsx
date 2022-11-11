import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import {Link} from 'react-router-dom'

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
      <h4>Popular recepies</h4>
      <Splide options={{
            perPage: 6,
            gap: "1rem",
            arrows: false,
            pagination: false,
            drag: "free",
            autoWidth: true,
            width: "95%",
            breakpoints: {
            2425: { perPage: 5,},
            1945: { perPage: 4,},
            1440: { perPage: 2,},
            950: { perPage: 1,},
            640 : { gap: 0 },
            },
          }}>
        
      {popular.map((recipe) => {
        return(
          <SplideSlide key={recipe.id}>
            <Link to={'/recipe/' + recipe.id}>
              <div  className='popular-card'>
                
                <img src={recipe.image} alt={recipe.title} />
                <h5>{recipe.title}</h5>
              </div>
          </Link>
          </SplideSlide>
        );
      })}
      </Splide>
    </div>
  )
}

export default Pupular