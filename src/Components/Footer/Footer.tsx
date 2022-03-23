 import React from 'react';
import {NavLink} from "react-router-dom";
 import {Button, Container} from "react-bootstrap";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
// @ts-ignore
 import VisaImg from "../../assets/img/visa_img.png";
 // @ts-ignore
 import MasterImg from "../../assets/img/master_img.png";
 // @ts-ignore
 import WesternImg from "../../assets/img/western_union.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <React.Fragment>
        <div className={'footer'}>
            <h1>INBOX ME!</h1>
            <p className={'text-center'}>Sign up to our newsletter and we’’ll keep you up to date with the latest arrivals</p>

            <div className={'footer_form'}>
                <form>
                    <input placeholder={'Enter Email Address'} type="email"/>
                    <Button>Sign Up</Button>
                </form>
            </div>
            <div className={'hr_tag'} />

            <div className={'footer_logo'}>
                <h2>LOGO</h2>
                <p className={'text-center'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum <br /> is simply dummy text of the printing and typesetting industry.</p>
                <ul>
                    <li><NavLink to="/order"> ORDER STATUS </NavLink></li>
                    <li><NavLink to="/about">ABOUT US </NavLink></li>
                    <li><NavLink to="/"> PRODUCT/CATEGORY </NavLink></li>
                    <li><NavLink to="/">FAQ </NavLink></li>
                    <li><NavLink to="/contact">CONTACT US </NavLink></li>
                    <li><NavLink to="/policy">RETURN POLICY </NavLink></li>
                    <li><NavLink to="/term-condition">TERMS & CONDITIONS </NavLink></li>
                    <li><NavLink to="/policy">PRIVACY POLICY </NavLink></li>
                    <li><NavLink to="/careers">CAREERS </NavLink></li>
                </ul>
            </div>

            <div className={'footer_links'}>
                <h2>FOLLOW US</h2>

                <div className={'social_icons'}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
            <div className={'hr_tag'} />
        </div>
        <div className={'all_rights'}>
            <Container>
                <p>© 2022. All Rights Reserved.</p>

                <div className={'payment_method'}>
                    <p>Payment method</p>
                    <img src={VisaImg} alt={'visa'} />
                    <img src={MasterImg} alt={'visa'} />
                    <img src={WesternImg} alt={'visa'} />
                </div>
            </Container>


        </div>
        </React.Fragment>
    );
};
export default Footer;