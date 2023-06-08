import {useEffect, useState} from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Users = () => {
    const [ users ,setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(()=>async () => {

            try {
                const data = await axiosPrivate.post('api/users/list');
                setUsers(JSON.stringify({data}))
            } catch (e) {
                console.log(e.stack);
            }

    },[users,setUsers])
}




export default Users;
