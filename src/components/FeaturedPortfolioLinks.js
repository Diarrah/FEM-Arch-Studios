import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResizeContext } from '../context/resize';

const FeaturedPortfolioLinks = () => {
    const { viewport } = useContext(ResizeContext);

    let portfolio1 = 'image-del-sol.jpg',
        portfolio2 = 'image-228b.jpg',
        portfolio3 = 'image-prototype.jpg';
    
    return (
        <>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" 
                src={
                    viewport > 768
                        ? require(`../images/portfolio/desktop/` + portfolio1)
                            : viewport > 500
                                ? require(`../images/portfolio/tablet/` + portfolio1)
                                : require(`../images/portfolio/mobile/` + portfolio1)
                } 
                alt="Thumbnail link to portfolio page" 
            />
            <h1 className="featured__section__portfolio__number">1</h1>
            <div className="featured__section__portfolio__textbox">
                <h5 className="featured__section__portfolio__textbox--heading">Project Del Sol</h5>
                <small className="featured__section__portfolio__textbox--subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" 
                src={
                    viewport > 768
                        ? require(`../images/portfolio/desktop/` + portfolio2)
                            : viewport > 500
                                ? require(`../images/portfolio/tablet/` + portfolio2)
                                : require(`../images/portfolio/mobile/` + portfolio2)
                } 
                alt="Thumbnail link to portfolio page" 
            />
            <h1 className="featured__section__portfolio__number">2</h1>
            <div className="featured__section__portfolio__textbox">
                <h5 className="featured__section__portfolio__textbox--heading">228B Tower</h5>
                <small className="featured__section__portfolio__textbox--subheading">View All Projects</small>
            </div>
        </Link>
        <Link to="/portfolio" className="featured__section__portfolio">
            <img className="featured__section__portfolio__image" 
                src={
                    viewport > 768
                        ? require(`../images/portfolio/desktop/` + portfolio3)
                            : viewport > 500
                                ? require(`../images/portfolio/tablet/` + portfolio3)
                                : require(`../images/portfolio/mobile/` + portfolio3)
                } 
                alt="Thumbnail link to portfolio page" 
            />
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