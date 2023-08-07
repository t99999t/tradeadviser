import { Link } from "react-router-dom"

const Editor = () => {
    return (
        <>
            <h2>Editors Page</h2>
            <br />
            <p>You must have been assigned an Editor role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Editor
