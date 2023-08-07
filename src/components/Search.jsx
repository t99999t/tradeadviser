import  { useState,useEffect } from'react'
import  { axiosPrivate } from '../api/axios'
import { Container } from 'react-bootstrap'
export default function Search() {  
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log(search)
       axiosPrivate.get(`https://api.themoviedb.org/3/search/movie?api_key='WEGFHGRJHKEJH849'&language=en-US&query=${search}`).
        then((res) => {
            console.log(res.data.results)
            setSearch(res.data)
        }).catch((err) => {
            setError(err.response)
            
            console.log(err)})
    }, [search,error])

    return (
        <Container>
            <h1>Search</h1>

            <div>
                <input type="text" 
                placeholder="Search"
                onChange={
                    (e) => console.log(e.target.value)

                }
                />
                {
                    error? <p>{error}</p> : search
                }

                <button>Search</button>
            </div>
        </Container>
    )
}   