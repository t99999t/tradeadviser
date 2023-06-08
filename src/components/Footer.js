import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import useAuth from "../hooks/useAuth"
import {ModalFooter} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Footer = () => {

    const {status} = useAuth()


    return (
        <ModalFooter>
         
            <p> Copyright © 2020  - {new Date().getFullYear()}    <a href="https://tradeadviser.org" >
            tradeadviser .Inc - All rights reserved.
            </a>
            </p>

            <Link>Features</Link>
            <Link>   Automatic Trading    </Link>  
            <div><Link>Exchange Arbitrage</Link>  
            <Link>
                    Market Making Bot</Link>
                    <Link>
                    Social trading</Link>
                    <Link>
                Algorithm Intelligence (AI)
                </Link>
                <Link>
            Trailing Stops
            </Link>
            <Link>
            Paper Trading
            </Link>
            <Link>
            Strategy Designer
            </Link>
            <Link>
            Backtesting
            </Link>
            <Link>
            Exchanges
            </Link>
            <Link>
            All Features
            </Link>
            <Link>
            Resources
            </Link>
            Get Started
            <Link>
            Tutorials
            </Link>
            <Link>
            Documentation
                </Link>
            Academy
            News
            <Link>
            Blog
            </Link>
            <Link>
            Technical Indicators
                </Link>
                <Link>
            Candlestick Patterns
            </Link>
           <Link>
            Company
            </Link>
            <Link to = {'/about'}>
            About Us
            </Link>
            <Link to={'careers'}>
            Careers
            </Link>
            Press
            Contact
            <Link to ={'/terms'}>
            Terms
            </Link>
            <Link to ={'/privacy'}>
                Privacy
            </Link>
            <Link to ={'/support'}>
            Support
            </Link>
            
        
            <Link to ={'/cryptocurrencies'}>
                Cryptocurrencies
                </Link>
            Exchanges
            <Link to ={'/exchanges'}>
                Exchanges
                </Link>
                <Link to ={'/signals'}>
                    Signals
                </Link>
            
            
            <Link to ={'/pricing'}>
                Pricing
            </Link>
            
            <Link to ={'/reviews'}
            >
                Reviews
            </Link>

            Pro Traders
            Website Widgets
            <Link to ={'/affiliates'}>
                Affiliates
                </Link>
                <Link to ={'/developer'}>
                    Developers
                </Link>
            
            Status

</div>
















<p><FontAwesomeIcon icon={faHouse} />
        <span className="dash-footer__text">
        <span className="dash-footer__text--bold">
        {status}    </span>
        </span>

        </p>



        </ModalFooter>
    )
    
}
export default Footer