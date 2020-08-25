import React from 'react';

const ContactDetails = () => {
    return (
        <div className="contact__details">
            <hr className="contact__details__line" />
            <h1 className="contact__details__heading">Contact Details</h1>
            <div className="contact__details__locations">
                <div className="contact__details__locations--main-office">
                    <address>
                        <p className="office__heading">Main Office</p>
                        <ul className="office__info">
                            <li className="office__info--email">
                                <span>Mail:</span>
                                <span>archone@mail.com</span>
                            </li>
                            <li className="office__info--address">
                                <span>Address:</span>
                                <span>1892 Chenoweth Drive TN</span>
                            </li>
                            <li className="office__info--phone">
                                <span>Phone:</span>
                                <span>123-456-3451</span>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="contact__details__locations--office-two">
                    <address>
                        <p className="office__heading">Office II</p>
                        <ul className="office__info">
                            <li className="office__info--email">
                                <span>Mail:</span>
                                <span>archtwo@mail.com</span>
                            </li>
                            <li className="office__info--address">
                                <span>Address:</span>
                                <span>3399 Wines Lane TX</span>
                            </li>
                            <li className="office__info--phone">
                                <span>Phone:</span>
                                <span>832-123-4321</span>
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;