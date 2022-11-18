import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Recipe() {
    
    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    const apiKey = process.env.REACT_APP_API_KEY
    const fechtDetails= async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`)
        const detailData = await data.json()
        setDetails(detailData)
    }
    useEffect (() => {
        fechtDetails() // eslint-disable-next-line
    },[params.name])
    
  return (
    <section className='recipe'>
        <div className='recipe-conteiner'>
        <div className='recipe-title'>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        </div>
        <div className='recipe-description'>
            <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => {setActiveTab('instructions')}}>Instructions</button>
            <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => {setActiveTab('ingredients')}}>Ingredients</button>
            {
                activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3> <br/>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
            )} 
            <div className='recipe-ingredients'>
            {
                activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient, index) =>{
                        return <li key={index}>{ingredient.original}</li>
                    })}
                </ul>
            )}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Recipe