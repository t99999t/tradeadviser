import {Component} from "react";
import {Card,Container,MenuItem, Nav} from "react-bootstrap";

import { MdTableRestaurant } from "react-icons/md";
import {Link} from "react-router-dom";
import {   MdSplitscreen} from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
    FaCalendarAlt,
    FaCalendarCheck,
    FaCalendarMinus,
    FaCalendarPlus
}
    from "react-icons/fa";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <Link to="/dashboard">
                            <img src="assets/images/logo.png" alt="logo"/>
                        </Link>
                    </div>
                </div>
            </div>)}}

function Dashboard (){

    
        return (<Container>
            <Sidebar/>
        <div className="main-content">
            <div className="page-content">
                
                <div className="container-fluid">
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard">
                                <MdTableRestaurant/>
                                <span>Dashboard</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/menu">
                                <MdSplitscreen/>
                                <span>Menu</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/reservation">
                                <FaRegCalendarAlt/>
                                <span>Reservation</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/calendar">
                                <FaCalendarAlt/>
                                <span>Calendar</span>
                            </Nav.Link>
                        </Nav>


                </div>
                </div></div>
                </Container>
        )}

    
export default Dashboard