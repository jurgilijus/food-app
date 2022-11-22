import React, {useEffect, useState} from 'react'

function PreparationTime() {
    const [preparationTime, setData] = useState([])
    // const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        const check = localStorage.getItem('preparationTime')
        if (check) {
            setData(JSON.parse(check))
            
        } else {
            setTimeout(() => {
                const apiKey = process.env.REACT_APP_API_KEY
                fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`)
                .then((resp) => {
                    if (!resp.ok) {
                        throw Error('Could not fetch data from server for that resource: ' + resp.ok)
                    }
                    return resp.json()
                })
                .then((apiData) =>{
                    setData(apiData.recipes);
                    localStorage.setItem('preparationTime', JSON.stringify(apiData.recipes));
                    // setIsPending(false)
                    setError(null)
                    console.log(apiData.recipes);
                })
                .catch(err => {
                    // setIsPending(false)
                    setError(err.message)
                })
            }, 1000)
        }
    }, [])
    
    return(
        <div className='test'>
            {error && <h1>{error}</h1>}
            {/* {isPending && <h1>Loading...</h1>} */}
            {preparationTime.map((time) => {
                return (<div key={time.id}>
                    <img src={time.image} alt={time.title} />
                    <p>{time.readyInMinutes}</p>
                </div>
                );
            })}
        </div>
    )
    
}

export default PreparationTime