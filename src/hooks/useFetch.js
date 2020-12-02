import {useState, useEffect} from 'react'

const useFetch = url =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchRecursos = async () =>{
                    try{
                    let res = await fetch(url)
                    let data = await res.json()
            
                    setData(data)
                    setLoading(false)
                }catch(error){
                    setLoading(false)
                    setError(error)
                }
            
                    // console.log(data)
                }

                fetchRecursos()
    },[url])

    return {data, loading, error}
}



export default useFetch 