import {Link, useNavigate} from "react-router-dom"

const Missing = () => {

    const navigate = useNavigate()
    return (
<div className="box">
    <div className = 'homepage-btn'>
        <button className="btn btn-primary" onClick={event => {
            event.preventDefault()
            navigate(-1)
        }}>Go Back</button>
    </div>
    


            <h2>Oops! Page Not Found.</h2>



            <Link to='layout' className={'homepage'} > <span>Visit our HomePage</span>

            </Link>

</div>
        
    )
}

export default Missing
