import React from 'react';
import {Container, Row,Col,Form} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'
import "./CartDetails.scss";

const CartDetails = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className="order_border_box">
                    <div className="order_form_container">
                        <Form>
                            <Row>
                                <div className="shipping_container">
                                    <div>
                                        <h5 className='shipping_address'>Shipping Address</h5>
                                    </div>

                                    <div>
                                        <span><FiEdit className='edit_icon' /></span>
                                        <small className="change"> Change</small>
                                    </div>
                                </div>
                                <Col md={12} className="mt-2">
                                    <Form.Group className="mb-1">
                                        <label className='order_form_label'>Name</label>
                                        <Form.Control type="text" placeholder="Enter full name" />
                                    </Form.Group>
                                </Col>

                                <Col md={12} className="mt-2">
                                    <Form.Group className="mb-3">
                                        <label className='order_form_label'>Address</label>
                                        <span className='home_icon'><FaHome /></span>
                                        <Form.Control type="text" placeholder="Enter your address" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label className='order_form_label'>City</label>
                                        <Form.Control type="text" placeholder="Enter your city" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3 dropdown">
                                        <label className='order_form_label'>Country</label>
                                        <Form.Control type="text" placeholder="Enter your country" />
                                    </Form.Group>
                                </Col>

                                <Col md={12}>
                                    <Form.Select>
                                        <option>Please select</option>
                                        <option value="1">Paypal</option>
                                        <option value="2">Master Card</option>
                                        <option value="3">Credit Card</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <hr />
                    <div className="border_btns_container">
                        <div className="btns_inner_container">
                            <button className='save_btn mx-2'>Save</button>
                            <button className='cancel_btn'>Cancel</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CartDetails;
