import axios from "../api/axios";
import useAuth from "./useAuth";

const SignOut = () => {
    const { setAuth } = useAuth();

    return async () => {
        await axios.get('/logout')
            setAuth({});
            sessionStorage.clear();
            localStorage.remove("accessToken");       window.location.reload();

           


    };
}

export default SignOut;