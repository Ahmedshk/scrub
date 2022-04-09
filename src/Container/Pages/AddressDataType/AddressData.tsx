import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import './AddressDataType.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'
import Banner from "../../../Components/Banner/Banner";
import Select from "react-select";
import { UsStateData } from '../AddressDataType/USStateData';
import { useNavigate } from 'react-router-dom';

const AddressData = () => {
    const [usData, setUSData] = useState<any>()
    const navigate = useNavigate()
    useEffect(() => {
        setUSData(UsStateData)
    }, [])

    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <Row>
                    <Col md={6} className='mt-3'>
                        <div className='address_form_container'>
                            <h3>Address data and type of delivery</h3>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>First Name</label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>Last Name</label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>Address</label>
                                        <Form.Control type="text" placeholder="Enter your address" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>City</label>
                                        <Form.Control type="text" placeholder="Enter your city" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>Postal Code/ZIP</label>
                                        <Form.Control type="number" placeholder="Enter your postal code" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>Phone number</label>
                                        <Form.Control type="number" placeholder="Enter your phone number" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <label>State</label>
                                    <Select
                                        options={usData}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        placeholder="Select your state"
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <label>E-mail</label>
                                        <Form.Control type="text" placeholder="Enter your email" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <div className='steps_container'>
                            <div>
                                <span onClick={()=> navigate("/order-summary")}>
                                    <IoIosArrowRoundBack className='back_icon' />   Back
                                </span>
                            </div>
                            <div className='btns_container'>
                                <div>
                                    <button className='continue_shopping'>CONTINUE SHOPPING</button>
                                </div>
                                <div>
                                    <button className='next_step' onClick={()=> navigate("/payment-method")}>NEXT STEP</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default AddressData