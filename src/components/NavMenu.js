import React, { Component } from 'react';

import './NavMenu.css';

import Header from "./Header";
import NavBar from "./NavBar";


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className='Header'>
                <Header toggleNavbar={this.toggleNavbar}/>
                <div className='NavMenu'>
                    <div className='NavMenu-item'>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/contact'>Contact</a>
                        <a href='/blog'>Blog</a>
                        <a href='/portfolio'>Portfolio</a>
                    </div>
                    <div className='NavMenu-item'>
                        <a href='https://www.linkedin.com/in/joshua-murphy-7a2008100/'>LinkedIn</a>
                    </div>
                    <div className='NavMenu-item'>
                        <a href='https://github.com/techexpert-solutions'>GitHub</a>
                    </div>
                 

                </div>
                <div className='NavMenu-toggle'>
                    <button onClick={this.toggleNavbar}></button>
                </div>
                <NavBar/>
                
            </div>

                
            
        );
    }
}
