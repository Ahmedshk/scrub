 import React from 'react';
import {Button} from "react-bootstrap";
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
            <p>Sign up to our newsletter and we’’ll keep you up to date with the latest arrivals</p>

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
                    <li>ORDER STATUS</li>
                    <li>ABOUT US</li>
                    <li>PRODUCT/CATEGORY</li>
                    <li>FAQ</li>
                    <li>CONTACT US</li>
                    <li>RETURN POLICY</li>
                    <li>TERMS & CONDITIONS</li>
                    <li>PRIVACY POLICY</li>
                    <li>CAREERS</li>
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
            <p>© 2022. All Rights Reserved.</p>

            <div className={'payment_method'}>
                <p>Payment method</p>

                <img src={VisaImg} alt={'visa'} />
                <img src={MasterImg} alt={'visa'} />
                <img src={WesternImg} alt={'visa'} />
            </div>

        </div>
        </React.Fragment>
    );
};
export default Footer;