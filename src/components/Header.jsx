import React from "react";
import "./Header.css";
import logo from '../assets/logo.jpg'

function Header() {
    return (
        <header className="header">
           
        <nav >
            <div className="logo">
                <img src={logo} alt="wowFood Logo" />
            </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Foods</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
