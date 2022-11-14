import React, {useState, useEffect} from 'react'
// import {motion} from 'framer-motion'
import {Link,useParams} from 'react-router-dom'


function Cuisine() {
  
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  
  const getCuisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }
  
  useEffect(() =>{
    getCuisine(params.type)
  },[params.type])
  
  
  return (
    <section className='cuisine-conteiner'>
      {
        cuisine.map((item) => {
          return(
            <Link to={'/recipes/' + item.id} key={item.id}>
            <div >
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
            </div>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Cuisine