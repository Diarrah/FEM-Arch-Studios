import React, { useRef } from 'react';
import arrow from '../images/icons/icon-arrow.svg';

const ContactForm = () => {
    let formEl = useRef(null);

    function isEmpty() {
        let inputElements = [...formEl.current.children].slice(0, -1);

        inputElements.forEach(input => {
            if (input.children[0].value.trim() === '') {
                input.classList.add('invalid')
                input.children[1].innerText = `Can't be empty`
            } else {
                input.classList.remove('invalid')
            }
        })
    }

    function isValid() {
        let email = formEl.current.children[1];

        if (!validateEmail(email.children[0].value.trim()) && email.children[0].value !== '') {
            email.classList.add('invalid')
            email.children[1].innerText = `Email invalid`
        } else {
            isEmpty(email.children[0].value.trim())
        }
    
        // Helper Regex function for email validation:
        function validateEmail(email) {
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validEmail.test(String(email).toLowerCase());
        }
    }

    const checkInputs = e => {
        let inputElements = [...formEl.current.children].slice(0, -1);

        e.preventDefault();
        isEmpty()
        isValid()

        !inputElements.some(input => input.classList.contains('invalid')) 
            && formEl.current.reset()
    }
    
    return (
        <div className="connect__section">
            <h1 className="connect__section__heading">Connect with us</h1>
            <form className="connect__section__form" ref={formEl} onSubmit={checkInputs}>
                <div className="connect__section__form__control">
                    <input 
                        aria-label="Enter your first and last name here"
                        placeholder="Name"
                        type="text"
                    />
                    <small />
                </div>
                <div className="connect__section__form__control">
                    <input 
                        aria-label="Enter your email address here"
                        placeholder="Email"
                        type="email"
                    />
                    <small />
                </div>
                <div className="connect__section__form__control">
                    <textarea 
                        aria-label="Enter your message here"
                        placeholder="Message"
                    />
                    <small />
                </div>
                <button className="connect__section__form__button">
                    <img className="connect__section__form__button--arrow" src={arrow} alt="" />
                </button>
            </form>
        </div>
    )
}

export default ContactForm;