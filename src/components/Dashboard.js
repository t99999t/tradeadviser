import {Component} from "react";
import {Container,MenuItem} from "react-bootstrap";


class Dashboard extends Component{
    render() {
        return (<Container>

 
                   <div className={'Dashboard'} >  
                    <h1>Dashboard</h1>
                     <menu>
                         <button>   <li><a href="https://www.tradingview.com/">TradingView</a></li></button>

                            <button>   <li>Platforms</li></button>
                            <li>Banks</li>
                            <button><li>Market Analysis</li></button>
                        <button><li>Investment</li></button><button><li>Infos</li></button>
                        <button> <li>Exchanges</li></button>
                            <button>      <li>Funds</li></button>
                            <button>    <li>Multi-currencies Infos</li></button>
                        <button>  <li>Crypto Market</li></button>
                            <button>         <li>Crypto</li></button>
                            <button>             <li>Stocks</li></button>
                                        <li>Training</li>
                            <button>      <li>Trading Bots</li></button>
                            <button>        <li>Advertisement</li></button>
                            <button>       <li>Sponsor</li></button>
                            <button >         <li>Organization</li></button>
                            <button >         <li>Support</li></button>
                            <button>         <li>Chats</li></button>
                            <button>      <li>Finances</li></button>
                                <button>        <li>News Events</li></button>
                                      </menu>

                                <menu>
                                <li><button id="save">Save for later</button></li>
                                <li><button id="share">Share this news</button></li>
                            </menu>
                   </div>
               
        </Container>           
        )}

    }
export default Dashboard