import React from 'react';
import skyscraper from '../images/home/desktop/image-welcome.jpg';

const Welcome = () => (
    <div className="welcome__section">
        <h1 className="welcome__section__heading">Welcome</h1>
        <div className="welcome__section__textbox">   
            <div className="welcome__section__main__content">
                <h2 className="welcome__section__main__content--subheading">Welcome to the Arch Studio</h2>
                <p className="welcome__section__main__content--paragraph">
                    We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                </p>
                <p className="welcome__section__main__content--paragraph">
                    Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                </p>
                <p className="welcome__section__main__content--paragraph">
                    Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                </p>
                <p className="welcome__section__main__content--paragraph">
                    We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                </p>
            </div>
        </div>
        <div className="welcome__section__image__container">
            <img className="welcome__section__image" src={skyscraper} alt="" />
        </div>
    </div>
)

export default Welcome;