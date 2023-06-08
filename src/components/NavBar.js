


import{ NavLink,NavItem,NavbarBrand,NavDropdown,Nav,Navbar} from'react-bootstrap';

import logo from '../components/assets/logo.png';


const NavBar = () => {
   

    return (
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/"> TradeAdviser
                            <img src={logo} width="100" height="100" alt="" />
                        </Navbar.Brand>
                        
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto">
                <NavItem >
                    <Nav.Link href="/">Home</Nav.Link>
                </NavItem >
                <NavItem >
                    <Nav.Link href="/ecommerce">Shop</Nav.Link>
                </NavItem >
                    <NavItem >
                        <Nav.Link href="/trading">Trade</Nav.Link>
                    </NavItem >
                    <NavItem >
                        <Nav.Link href="/invest">Invest</Nav.Link>
                    </NavItem >

                    <NavItem >
                        <Nav.Link href="/exchanges">Exchange</Nav.Link>
                    </NavItem >
                    <NavItem >
                        <Nav.Link href="/transfert">Transfert</Nav.Link>
                    </NavItem >

                         <NavItem >
                            <Nav.Link href="/trading">Live Trading</Nav.Link>
                        </NavItem >
               
            
                <NavItem >
                        <Nav.Link href="/map"> Map </Nav.Link>
                 </NavItem >
        
               <NavItem >
                        <Nav.Link href="/search">Search</Nav.Link>
                    </   NavItem >
                <NavItem >
                        <Nav.Link href="/market/info">Market Info</Nav.Link>
                </NavItem >
                <NavItem >
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                 </NavItem >
                    <NavItem >
                        <Nav.Link href="/events">Events</Nav.Link>
                    </NavItem >
               
               
                    <Nav.Link href="/wallet">Wallet</Nav.Link>
                    <NavItem >
                    <Nav.Link href="/bot">Trading Bot</Nav.Link>
                    </NavItem >
                       
                            <NavItem >
                            <Nav.Link href="/account">Account</Nav.Link>
                        </NavItem >
                      
                    <NavItem >
                        <Nav.Link href="/profile">profile</Nav.Link>
                    </NavItem >
                    <NavItem >
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </NavItem >
                    <NavItem >
                        <Nav.Link href="/about">About</Nav.Link>
                    </NavItem >
                 
                </Nav>
               
            </Navbar.Collapse>
          

        <Nav.Link>
               
        </Nav.Link>            
        
    </Navbar>

    )
};
export default NavBar;