import React from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Banner from "../../../Components/Banner/Banner";
import Brand from "../../../Components/Brand/Brand";
import Offer from "../../../Components/Offer/Offer";
import Testimonial from "../../../Components/Testimonial/Testimonial";
import ContactImage from '../../../assets/img/contact-us-image.png';
import "./Contact.scss";

const Contact = () => {
    return (
        <React.Fragment>
            <Banner heading={'CONTACT US'} cssClass={'about_main'} />
            <Container>
                <Row>
                    <Col md={6} className='mt-4 border_box'>
                        <div className="get_in_touch_container">
                            <h4>GET IN TOUCH WITH US</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis, molestiae cum iusto, illum ullam similique . Numquam iure sequi explicabo est!</p>
                        </div>
                        <div className='form_container'>
                            <h6> Send Message </h6>
                            <Form>
                                <Row>
                                    <Col md={6} className="mt-2">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter full name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mt-2">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter email address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <button type="submit"> Submit </button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <hr />
                        <div className='border_icons_container'>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="home"> <HomeIcon  /> </Fab>
                                <p> Dummy Address Put here </p>
                            </Col>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="Phone"> <PhoneIcon /> </Fab>
                                <p> +00-012-264412 </p>
                            </Col>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="email"> <EmailIcon /> </Fab>
                                <p> info@yourdomain.com </p>
                            </Col>
                        </div>
                    </Col>
                    <Col className='mb-2' md={6}>
                        <div className="contact_image_container">
                            <img src={ContactImage} alt={'img'} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Brand />
            <Offer />
            <Testimonial />
        </React.Fragment>
    );
};
export default Contact;