import React from "react";

import "./Header.css"


import NavBar from "../components/NavBar";
import {Card,ModalHeader,Navbar} from "react-bootstrap"
import logo from '../components/assets/logo.png';
export default function Header() {
  return (
    <ModalHeader>
     <Card.Title className="text-center"> TradeAdviser
       <Navbar.Brand href="/">
      <img src={logo} width="100" height="100" alt="" />
      </Navbar.Brand>


    </Card.Title>
        <NavBar/>
</ModalHeader>
  )
  }