import {Link} from "react-router-dom"

const Lounge = () => {
    return (
        <>
            <h1>The Lounge</h1>
            <br />
            <p>Admins and Editors can hang out here.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Lounge
