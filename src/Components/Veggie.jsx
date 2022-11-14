import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import {Link} from 'react-router-dom'

function Veggie() {
  
  const [veggie, setVeggie] = useState([])
  
  useEffect(() =>{
    getVeggie()
  },[])
  
  const getVeggie = async () => {
    
    const check = localStorage.getItem('veggie')
    
    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json();
      
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      console.log(data.recipes);
      setVeggie(data.recipes)
    }
  }
  
  return (
    <div className='popular-conteiner'>
      <h4>Vegetarian recepies</h4>
      <Splide options={{
            perPage: 6,
            gap: "1rem",
            arrows: false,
            pagination: false,
            drag: "free",
            width: "95%",
            autoWidth: "10%",
            breakpoints: {
            2425: { perPage: 5,},
            1945: { perPage: 4,},
            1440: { perPage: 2,},
            950: { perPage: 1,},
            640 : { gap: 0 },
            },
          }}>
        
      {veggie.map((recipe) => {
        return(
          <SplideSlide key={recipe.id}>
          <Link to={'/recipes/' + recipe.id}>
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

export default Veggie