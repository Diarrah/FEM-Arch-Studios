import React from 'react';
import { Link } from 'react-router-dom';
import portfolio1desktop from '../images/portfolio/desktop/image-del-sol.jpg';
import portfolio2desktop from '../images/portfolio/desktop/image-228b.jpg';
import portfolio3desktop from '../images/portfolio/desktop/image-prototype.jpg';
import portfolio1mobile from '../images/portfolio/mobile/image-del-sol.jpg';
import portfolio2mobile from '../images/portfolio/mobile/image-228b.jpg';
import portfolio3mobile from '../images/portfolio/mobile/image-prototype.jpg';


const FeaturedPortfolioLinks = () => {
    return (
        <>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" src={portfolio1desktop} alt="Thumbnail link to portfolio page" />
            <h1 className="featured__section__portfolio__number">1</h1>
            <div className="featured__section__portfolio__textbox">
                <h5 className="featured__section__portfolio__textbox--heading">Project Del Sol</h5>
                <small className="featured__section__portfolio__textbox--subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" src={portfolio2desktop} alt="Thumbnail link to portfolio page" />
            <h1 className="featured__section__portfolio__number">2</h1>
            <div className="featured__section__portfolio__textbox">
                <h5 className="featured__section__portfolio__textbox--heading">228B Tower</h5>
                <small className="featured__section__portfolio__textbox--subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" src={portfolio3desktop} alt="Thumbnail link to portfolio page" />
            <h1 className="featured__section__portfolio__number">3</h1>
            <div className="featured__section__portfolio__textbox">
                <h5 className="featured__section__portfolio__textbox--heading">Le Prototype</h5>
                <small className="featured__section__portfolio__textbox--subheading">View All Projects</small>
            </div>
        </Link>
        </>
    )
}

export default FeaturedPortfolioLinks;