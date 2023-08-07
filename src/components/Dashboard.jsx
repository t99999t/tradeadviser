import {Component} from "react";
import {Container,MenuItem} from "react-bootstrap";


class Dashboard extends Component{
    render() {
        return (<>
                    <h1>Dashboard</h1>

                         <ul>   <li><a href="https://www.tradingview.com/">TradingView</a></li>

                             <li>Platforms</li>
                            <li>Banks</li>
                            <li>Stocks</li>
                            <li>News</li>
                            <li>Market Analysis</li>
                            <li>Investment</li>
                            <li>Infos</li>
                            <li>Exchanges</li>
                            <li>Funds</li>
                            <li>Finances</li>
                            <li>Crypto Market</li>
                            <li>Crypto</li>

                            <li>Training</li>
                            <li>Trading Bots</li>
                            <li>Advertisement</li>
                            <li>Sponsor</li>
                            <li>Organization</li>
                            <li>Support</li>



                                <li><button id="save">Save for later</button></li>
                                <li><button id="share">Share this news</button></li>
                                       </ul>



               
        </>
        )}

    }
export default Dashboard