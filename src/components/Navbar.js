import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLinks } from '../components';
import logo from '../images/archLogo.svg';

const Navbar = () => {
    let mobileMenu = useRef(),
        overlay = useRef(),
        { body } = document;

    useEffect(() => {
        hideMobileNav()
    }, [])

    const hideMobileNav = () => {
        let links = [...mobileMenu.current.children[0].children],
            symbol = document.querySelector('.navbar--mobile');

        links.forEach(link => link.addEventListener('click', () => {
            overlay.current.classList.remove('active')
            mobileMenu.current.classList.remove('deployed')
            symbol.classList.remove('change')             
        }))
    }

    const mobileNavOpen = e => {
        e.target.parentElement.classList.toggle('change');
        e.target.nextSibling.classList.remove('spin');
        mobileMenu.current.classList.toggle('deployed');
        overlay.current.classList.add('active');
        body.style.overflowY = 'hidden';
    }

    const mobileNavClosed = e => {
        setTimeout(function() {
            e.target.parentElement.classList.toggle('change')
        }, 850);
        e.target.classList.add('spin');
        mobileMenu.current.classList.toggle('deployed');
        mobileMenu.current.style.transitionDelay = '450ms';
        overlay.current.classList.remove('active');
        overlay.current.style.transitionDelay = '450ms';
        body.style.overflowY = 'visible';
        e.persist();
    }

    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Arch company logo" />
            </Link>
            <div className="navbar__links">
                <PageLinks />
            </div>
            <a href="#" className="navbar--mobile" aria-label="Button for mobile menu deployment">
                <i className="fa fa-bars" aria-hidden="true" onClick={mobileNavOpen} />
                <i className="fa fa-times" aria-hidden="true" onClick={mobileNavClosed}  />
            </a>
            <div className="navbar__links--mobile" ref={mobileMenu} onClick={hideMobileNav}>
                <PageLinks />
            </div>
            <div className="overlay" ref={overlay} />
        </div>
    )
}

export default Navbar;