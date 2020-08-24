import React, { useState } from 'react';
import { PortfolioLink } from '../components';
import data from '../data.json';

const Portfolio = () => {
    const [portfolios] = useState(data);

    return (
        <div className="portfolios__grid">
            {portfolios.map((portfolio) => (
                <PortfolioLink 
                    link={portfolio}
                    key={portfolio.id}
                />
            ))}
        </div>
    )
}

export default Portfolio;