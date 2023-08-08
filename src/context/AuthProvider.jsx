import {createContext, useState,useContext} from "react";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
  
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist") === false||true));
     
    const value = {
        auth,
        setAuth,
        persist,
        setPersist
    };
    useContext(AuthContext).value = value;


    return (
        <AuthContext.Provider value={value}>
            {children}    
        </AuthContext.Provider>
    )
}

export default AuthContext;