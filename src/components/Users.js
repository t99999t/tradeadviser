import {useEffect, useState} from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";


const User = () => {
    const [users,setUsers] = useState(null);
    let data;
    const axiosPrivate = useAxiosPrivate();
    useEffect(()=>async()=> {
            try {
                data =  axiosPrivate.get('api/users/id');
                setUsers(JSON.stringify({data}))
                console.log(data);
            } catch (e) {
                console.log(e.stack);
            }
            setUsers(JSON.stringify({data}));

    },[users])
    console.log(users);
    return (
        <div>
            {users}
        </div>
    )
}




export default User;
