
import  { ModalFooter, Container } from 'react-bootstrap'

import { Link } from "react-router-dom"

function Footers (){


    return (<ModalFooter>
    <Container>
            Copyright © 2020  - {new Date().getFullYear()}
               TradeAdviser.Inc   -   All rights reserved.

            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>

            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
            </Container>
  </ModalFooter>
       )
    
}
export default Footers