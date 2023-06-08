import {Link} from "react-router-dom"
import Navbar from'react-bootstrap/Navbar'

function LinkPage() {
    return (
<div className="navbar">
<Navbar bg="dark" variant="dark">
<Link to="/">Home</Link>

              <br/><Link to={'logout'}>Logout </Link>
            <Link to={'dashboard'}>Dashboard</Link>
            <br />
            <Link to={'products'}>Products</Link>
            <br />
            <Link to={'categories'}>Categories</Link>
            <br />
            <Link to={'orders'}>Orders</Link>
            <Link to={'trading'}>Trading</Link>
            <br />
            <Link to='platform' >Platform</Link>
            <br />

            <Link to='ecommerce' >Ecommerce</Link>
            <br />

            <Link to={'users'}>Users Pages</Link>
            <br />
            <Link to={'youtube'}>Youtube Video</Link>
                <br /><Link to={'editor'}>Editors Page</Link>

            <Link to={'employee'}>Employee Page</Link>
                <br />
            <Link to={'admin'}>Admin Page</Link>

            <br />
             <Link to={'logout'}>Logout</Link>
            <br />
            <br /><Link to={'news'}>News Page</Link>
            <br />
            <br /><Link to={'about'}>About Page</Link>
            <br />

            <br /><Link to={'faq'}>FAQ Page</Link>
            <br />
            <br /><Link to={'privacy'}>Privacy Policy</Link>
            <br />
            <br /><Link to={'terms'}>Terms of Service</Link>
            <br />
            <br /><Link to={'contact'}>Contact Us</Link>
            <br />
            <br /><Link to={'license'}>License</Link>

            <br />
            </Navbar>


      </div>  )
}

export default LinkPage
