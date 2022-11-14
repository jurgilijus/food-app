import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Searched() {
    
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    
    const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
  }
  
  useEffect(() => {
    getSearched(params.search)
  },[params.search])
    
  return (
    <section className='cuisine-conteiner'>
      {
        searchedRecipes.map((item) => {
            return(
                <Link to={'/recipes/' + item.id} key={item.id}>
                <div>
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

export default Searched