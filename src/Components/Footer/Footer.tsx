 import React from 'react';

const Footer = () => {
    return (
        <div className={'footer'}>
            <h3>INBOX ME!</h3>
            <p>Sign up to our newsletter and we’’ll keep you up to date with the latest arrivals</p>

            <div>
                <form>
                    <input placeholder={'Enter Email Address'} type="email"/>
                </form>

            </div>
        </div>
    );
};

export default Footer;
