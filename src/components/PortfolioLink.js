import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioLink = ({ link: { picture, projectDate, projectName } }) => {
    return (
        <Link to="#" className="portfolio__thumbnail">
            <img 
                className="portfolio__thumbnail__background" 
                src={require('../images/portfolio/desktop/' + picture)} 
                alt={`Link to ${projectName} project`}
            />
            <div className="portfolio__thumbnail__textbox">
                <h4 className="portfolio__thumbnail__textbox--name">{projectName}</h4>
                <small className="portfolio__thumbnail__textbox--date">{projectDate}</small>
            </div>
        </Link>
    )
}

export default PortfolioLink;