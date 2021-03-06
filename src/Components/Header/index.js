import React, { useState } from 'react';
import Web from './Web/index.js';
import Mobile from './Mobile/index.js';
import "./header.css"
function Header() {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <div className="header">
            <div className="logo">whitedaisies</div>
            <div className="menu">
            <div className="webMenu"><Web /></div>
            <div className="mobileMenu">
            <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi fi-br-menu-burger"></i>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
            </div>
        </div>
         
   );
}

export default Header
