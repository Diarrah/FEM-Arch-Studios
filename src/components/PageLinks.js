import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => {
    const pageNavigationLinks = ['portfolio', 'about', 'contact'];
    
    return (
        <ul className="page__links__container">
            {pageNavigationLinks.map((link, i) => (
                <li className="page__link" key={i}>
                    <Link to={`/${link}`}>{i === 1 ? link + ` Us` : link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks;