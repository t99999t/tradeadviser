import {useEffect, useState} from "react";
import axiosPrivate from "../api/axios";



async function useCurrentUser() {



    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {

        axiosPrivate.get('/api/users/id ').then((response) => {
            setCurrentUser(response.data);
        }).catch((error) => {
        console.log(error);
        })

    }, [currentUser])

    return currentUser;
}

export default useCurrentUser;