import { useFetcher ,useEffect,useState}  from "react-router-dom"


const User=(props)=>{

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    const fetcher=useFetcher()
    useEffect(()=>{
        fetcher(`/api/users/${props.match.params.id}`).then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    setUser(data)
                    setLoading(false)
                })
            }else{
                setError(res.statusText)
            }
        })
    },[fetcher,props.match.params.id])

    return(<>
    
    {loading&&<h1>Loading...</h1>}
    {error&&<h1>{error}</h1>}
    {user&&<h1>{user.username}'s profile</h1>}'
    

    </>)




}
export default User