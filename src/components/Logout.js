import useSignOut from "../hooks/useSignOut";

 function Logout() {
    const out = useSignOut()
    function handleLogout() {

        out();
        localStorage.removeItem('access_token');
        window.location.reload();
        window.location.href = '/login';
    }
    handleLogout()
    return (
        <div className="logout" handleLogout>


                              Logout Successfully!



           
        </div>
    )
    }
    export default Logout;