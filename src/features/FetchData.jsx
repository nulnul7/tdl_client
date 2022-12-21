import { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
        }
        getData()
    }, [url]);

    const reFetchData = async () => {
        
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
    }

    return { data, error, reFetchData }
}

export default FetchData;