import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import igIcon from '../igLogo/igIcon.png';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <Link to="/buildP" id="logo1"><h1>Furkan Öztürk</h1></Link>
                <Link to="/buildP/portraiture"><h2>Portraiture</h2></Link>
                <Link to="/buildP/locations"><h2>Locations</h2></Link>
                <Link to="/buildP/contact"><h2>Contact</h2></Link>
                <a id="instagram" href="https://www.instagram.com/furkanozturk96/">
                    <img src={igIcon} alt="igLogo" className="instagramIcon" />
                </a>
            </div>
        )
    }
}

export default Menu;