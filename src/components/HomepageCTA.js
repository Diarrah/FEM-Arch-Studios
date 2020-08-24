import React from 'react';
import { Link } from 'react-router-dom';
import backdrop from '../images/home/desktop/image-small-team.jpg';
import arrow from '../images/icons/icon-arrow.svg';

const HomepageCTA = () => {
    return (
        <div className="about__page__redirect">
            <div className="about__page__redirect--backdrop">
                <img src={backdrop} className="about__page__redirect--backdrop-image" alt="" />
            </div>
            <h2 className="about__page__redirect--heading">Small team,</h2>
            <Link to="/about" className="btn about__page__redirect--btn">
                <span>About Us</span>
                <img className="arrow" src={arrow} alt="Arrow to redirect to about page" />
            </Link>
        </div>
    )
}

export default HomepageCTA;