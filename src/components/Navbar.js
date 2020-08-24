import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/archLogo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Arch company logo" />
            </Link>
            
            <ul className="navbar__links__container">
                <li className="navbar__link">
                    <Link to="/portfolio"> Portfolio </Link>
                </li>
                <li className="navbar__link">
                    <Link to="/about"> About Us </Link>
                </li>
                <li className="navbar__link">
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;