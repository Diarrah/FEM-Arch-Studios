import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedPortfolioLinks } from '../components';
import arrow from '../images/icons/icon-arrow.svg';

const Featured = () => (
    <div className="featured__section">
        <h2 className="featured__section--heading">Featured</h2>
        <Link to="/portfolio" className="btn featured__section--btn">
            <span>See all</span>
            <img src={arrow} alt="Arrow to redirect to portfolios" />
        </Link>
        <div className="featured__section__portfolios">
            <FeaturedPortfolioLinks />
        </div>
    </div>
)

export default Featured;