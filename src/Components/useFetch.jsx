import {useState, useEffect} from 'react'

const useFetch = () => {
    const [data, setData] = useState([])
    // const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect((url)=>{
        const check = localStorage.getItem('preparationTime')
        if (check) {
            setData(JSON.parse(check))
            
        } else {
            setTimeout(() => {
                const apiKey = process.env.REACT_APP_API_KEY
                fetch(url)
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
    
    return {data, error}
}

export default useFetch