import React from 'react';
import { Link } from 'react-router-dom';
import backdrop from '../images/home/desktop/image-small-team.jpg';
import arrow from '../images/icons/icon-arrow.svg';

const HomepageCTA = () => (
    <div className="about__page__redirect">
        <div className="about__page__redirect--backdrop">
            <img src={backdrop} className="about__page__redirect--backdrop-image" alt="" />
        </div>
        <div className="about__page__redirect__textbox">
            <h2 className="about__page__redirect__textbox--heading">Small team, <br /> big ideas</h2>
            <Link to="/about us" className="btn about__page__redirect--btn">
                <span>About Us</span>
                <img className="arrow" src={arrow} alt="Arrow to redirect to about page" />
            </Link>
        </div>
    </div>
)

export default HomepageCTA;