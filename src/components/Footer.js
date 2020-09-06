import React from 'react';
import { Link } from 'react-router-dom';
import { PageLinks } from '../components';
import footerLogo from '../images/archLogoWhite.svg';
import arrow from '../images/icons/icon-arrow.svg';

const Footer = () => (
    <div className="footer">
        <div className="footer__logo__container">
            <Link to="/">
                <img className="footer__logo" src={footerLogo} alt="Arch company logo" />
            </Link>  
        </div>
        <div className="footer__links">
            <PageLinks />
        </div>
        <Link to="/portfolio" className="footer__btn btn">
            <span>See Our Portfolio</span>
            <img className="footer__btn__arrow" src={arrow} alt="Arrow to redirect to portfolio" />
        </Link>
    </div>
)

export default Footer;