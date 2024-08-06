import React from 'react';
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.jpeg"
import "./Footer.css"


function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; All rights reserved. Designed by Hamad Ur Rehman</p>
      <div className="footer-image">
        <a href="www.facebook.com" > <img src={facebook} alt={facebook} style={{width:"40px"}}/></a>
        <a href="www.twitter.com" > <img src={twitter} alt={twitter} style={{width:"40px"}}/></a>
        <a href="www.instagram.com" > <img src={instagram} alt={instagram} style={{width:"40px"}}/></a>
        
      </div>
    </footer>
  );
}

export default Footer;
