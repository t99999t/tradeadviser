import {useContext, useDebugValue} from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.username? "Sign In " : "Sign Out")
    return useContext(AuthContext);
}

export default useAuth;