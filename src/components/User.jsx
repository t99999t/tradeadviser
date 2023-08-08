

import { useState ,useEffect} from "react"
import { axiosPrivate } from "../api/axios"
import {FormText} from "react-bootstrap"

const User=(props)=>{

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    console.log("id "+localStorage.getItem("id"))
    useEffect(()=>{
        axiosPrivate.get("/api/users/id",{id:
       
        localStorage.getItem("id")}).then(res=>{
            setUser(res.data)
            setLoading(false)
            setError('')}).catch(err=>{
                setLoading(false)
                setError(err.response.data.message)
            })
           
    },[])

    return(<>
    
    {loading&&<h1>Loading...</h1>}
    {error&&<h1>{error}</h1>}
    {user&&<h1>{user.username}'s profile</h1>}
    <FormText user={user} setUser={setUser} />
    
    </>)




}
export default User