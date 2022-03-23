import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import { BiSearch } from 'react-icons/bi';
import {HiOutlineShoppingBag} from "react-icons/hi";
import "./Header.scss";

const Header = () => {
    return (
        <React.Fragment>
            {/*----------------------Top Section --------------------*/}
            <div className={'header'}>
                <Container>
                    <Navbar expand="lg">
                        <Container>
                            <p>FREE SHIPPING / RETURNS ON ORDERS OVER $100 WITHIN US</p>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/about">ABOUT US</Nav.Link>
                                    <Nav.Link href={'/contact'}>CONTACT US</Nav.Link>
                                    <Nav.Link href={'/order'}>ORDER STATUS</Nav.Link>
                                    <Nav.Link>SIGN IN / SIGN UP</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            {/*--------------------------Logo Section-------------------------------*/}
            <Container>
                <div className={'logo_section'}>
                    <h2><NavLink to='/'> LOGO </NavLink></h2>
                    <div className={'icon_section'}>
                        <BiSearch />
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </Container>
            <hr className={'divider'} />
            {/*-------------------------Collection section---------------------------*/}
            <Container className={'collection_section'}>
                <Navbar style={{overflow: 'hidden'}} expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav1" />
                        <Navbar.Collapse id="basic-navbar-nav1" className={'justify-content-center'}>
                            <Nav className="mr-auto">
                                <Nav.Link>WOMEN</Nav.Link>
                                <Nav.Link>MEN</Nav.Link>
                                <Nav.Link>BRANDS</Nav.Link>
                                <Nav.Link>COLOR</Nav.Link>
                                <Nav.Link>ACCESSORIES</Nav.Link>
                                <Nav.Link>CLEARANCE</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </React.Fragment>
    );
};
export default Header;