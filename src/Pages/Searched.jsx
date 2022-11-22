import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const apiKey = process.env.REACT_APP_API_KEY
    
    const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=50&query=${name}&ReadyTime`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
    
  }
  
  useEffect(() => {
    getSearched(params.search) // eslint-disable-next-line
  },[params.search])
    
  
  
  return (
    <section className='cuisine-conteiner'>
      {
        searchedRecipes.map((item) => {
            return(
              <div key={item.id}>
              <Link to={'/recipes/' + item.id} className='cuisine-card'>
                <div>
                    <img src={item.image} alt={item.title} className='cuisine-img'/>
                    <h5>{item.title}</h5>
                </div>
              </Link>
          
              </div>
            )
        })
      }
    </section>
  )
}

export default Searched