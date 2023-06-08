import {useEffect, useState} from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const User = () => {
    const [user,setUser] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(()=>async () => {

            try {
                const data = await axiosPrivate.get('api/users/list');
                setUser(JSON.stringify({data}))
            } catch (e) {
                console.log(e.stack);
            }

    })
}




export default User;
