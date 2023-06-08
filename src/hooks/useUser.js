import {useEffect, useState} from "react";
import axios from "../api/axios";

export default useUser;
function useUser(props) {
    const [user,setUser]=useState([])

useEffect(()=>{

    axios.get("/api/users"
    ).then(r => {
        setUser(r.data)
    }).catch(err => console.log(err))


},[props.data, user])


}