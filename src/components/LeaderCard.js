import React from 'react';
import linkedin from '../images/icons/icon-linkedin.svg';
import twitter from '../images/icons/icon-twitter.svg';

const LeaderCard = ({ avatar, name, title }) => {
    return (
        <div className="leaders__card">
            <div className="leaders__card__avatar__container">
                <img className="leaders__card__avatar" src={avatar} alt={`${name}'s company headshot`} />
                <div className="leaders__card__avatar__overlay">
                    <a href="#">
                        <img className="social__media__icon" src={linkedin} alt="LinkedIn redirect" />
                    </a>
                    <a href="#">
                        <img className="social__media__icon" src={twitter} alt="Twitter redirect" />
                    </a>
                </div>
            </div>
            <div className="leaders__card__textbox">
                <h6 className="leaders__card__textbox--name">{name}</h6>
                <small className="leaders__card__textbox--title">{title}</small>
            </div>
        </div>
    )
}

export default LeaderCard;