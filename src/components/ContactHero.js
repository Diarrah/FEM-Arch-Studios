import React from 'react';
import heroDesktop from '../images/contact/desktop/image-hero.jpg';

const ContactHero = () => {
    return (
        <div className="contact__hero">
            <div className="contact__hero__image__container">
                <img className="contact__hero__image__container--image" src={heroDesktop} alt="" />
                <div className="contact__hero__image__container--void" />
                <hr className="contact__hero__image__container--line" />
            </div>
            <div className="contact__hero__textbox">
                <h1 className="contact__hero__textbox--heading">Contact</h1>
                <hr className="contact__hero__textbox--line" />
                <h2 className="contact__hero__textbox--subheading">Tell us about your project</h2>
                <p className="contact__hero__textbox--main-content">
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                </p>
            </div>
        </div>
    )
}

export default ContactHero;