
import{ NavbarBrand,Navbar} from'react-bootstrap';
import Container from'react-bootstrap/Container';
import logo from '../components/assets/logo.png';
import '../components/NavMenu.css'

const NavBar = () => {


    return (


              <nav>


  <Navbar className="nav-menu">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />


                   <Navbar.Collapse id="responsive-navbar-nav">
                  <ul className="navbar-links">
                                      <li><a href="/">HOME</a></li>
                                       <li><a href="shop">SHOP</a></li>
                                      <li><a href="rent">RENT</a></li>
                                      <li><a href="roommate">ROOMMATE</a></li>
                                      <li><a href="delivery">DELIVERY</a></li>
                                       <li><a href="trade">INVEST/TRADE</a></li>
                                        <li><a href="map">MAP</a></li>
                                      <li><a href="faq">FAQ</a></li>
                                      <li><a href="contact">CONTACT</a></li>
                                      <li><a href="about">ABOUT</a></li>
                                    </ul>
                   </Navbar.Collapse>
                   </Navbar>

                 </nav>

    )
};
export default NavBar;