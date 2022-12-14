import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import {Link} from 'react-router-dom'
import {AiFillLike} from 'react-icons/ai'


// CSS
import '../index.css'
import '@splidejs/react-splide/css';


function Pupular() {
  
  const [popular, setPopular] = useState([])
  // console.log(popular);
  
  useEffect(() =>{
    getPopular()
  },[])
  
  
  
  const getPopular = async () => {
    
    const check = localStorage.getItem('popular')
    const apiKey = process.env.REACT_APP_API_KEY
    
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`)
      const data = await api.json();
      
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data)
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
            width: "100%",
            direction: "vertical",
            wheel: true,
            releaseWheel: true,
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
            <Link to={'/recipes/' + recipe.id}>
              <div  className='popular-card'>
                <img src={recipe.image} alt={recipe.title} />
                <h5>{recipe.title}</h5>
                <div className='lables'>
                <label>About: {recipe.readyInMinutes} min</label>
                <label className='aligne-like'><AiFillLike size={15}/> {recipe.aggregateLikes}</label>
                </div>
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