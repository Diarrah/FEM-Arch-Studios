import React from 'react';
import heroDesktop from '../images/about/desktop/image-hero.jpg';
import heroTablet from '../images/about/tablet/image-hero.jpg';
import heroMobile from '../images/about/mobile/image-hero.jpg';

const AboutHero = () => {
    return (
        <div className="about__hero">
            <div className="about__hero__image__container">
                <img className="about__hero__image__container--image" src={heroDesktop} alt="" />
                <div className="about__hero__image__container--void" />
                <hr className="about__hero__image__container--line" />
            </div>
            <div className="about__hero__textbox">
                <h1 className="about__hero__textbox--heading">About</h1>
                <hr className="about__hero__textbox--line" />
                <h2 className="about__hero__textbox--subheading">Your team of professionals</h2>
                <p className="about__hero__textbox--main-content">
                    Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                </p>
            </div>
        </div>
    )
}

export default AboutHero;