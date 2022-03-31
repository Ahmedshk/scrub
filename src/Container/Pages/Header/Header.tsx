import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom"
import { BiSearch } from 'react-icons/bi';
import {HiOutlineShoppingBag} from "react-icons/hi";
import "./Header.scss";

const Header = () => {
    return (
        <React.Fragment>
            <div className={'header'}>
                <Container>
                    <Navbar expand="lg">
                        <Container>
                            <p>FREE SHIPPING / RETURNS ON ORDERS OVER $100 WITHIN US</p>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                                <Nav className="mr-auto">
                                    <Nav.Link> <Link to={'/about'}> ABOUT US </Link> </Nav.Link>
                                    <Nav.Link> <Link to={'/contact'}> CONTACT US </Link></Nav.Link>
                                    <Nav.Link> <Link to={'/order'}> ORDER STATUS </Link></Nav.Link>
                                    <Nav.Link> <Link to={'/login'}> SIGN IN </Link></Nav.Link>
                                    <Nav.Link> <Link to={'/register'}> SIGN UP </Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <Container>
                <div className={'logo_section'}>
                    <h2><Link to='/'> LOGO </Link></h2>
                    <div className={'icon_section'}>
                        <BiSearch />
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </Container>
            <hr className={'divider'} />
            <div className={'collection_section'}>
                <Container>
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
            </div>
        </React.Fragment>
    );
};
export default Header;