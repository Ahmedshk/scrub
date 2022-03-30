import React, {useState} from 'react';
import {Container, Row, Col, Form, Spinner} from 'react-bootstrap'
import {FaHome} from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../Components/Validation/Validation';
import "./CartDetails.scss";

type ShippingDetails = {
    name: string,
    address: string,
    city: string,
    country: string,
    paymentMethod: string,
}

const CartDetails = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ShippingDetails>();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = (data: ShippingDetails) => {
        setIsLoading(true)
        console.log("data", data);
        reset()
    };

    return (
        <Container fluid>
            <div className="order_border_box">
                <div className="order_form_container">
                    <div className="shipping_container">
                        <h5 className='shipping_address'>Shipping Address</h5>
                        <div>
                            <span><FiEdit className='edit_icon' /></span>
                            <small className="change"> Change</small>
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Row>
                            <Col md={12} className="mt-2">
                                <Form.Group className="mb-1">
                                    <label className='order_form_label'>Name</label>
                                    <Form.Control type="text" placeholder="Enter full name" {...register('name', inputValidation.name)} />
                                    <small className="text-danger"> {errors.name && errors.name.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mt-2">
                                <Form.Group className="mb-3">
                                    <label className='order_form_label'>Address</label>
                                    <span className='home_icon'><FaHome /></span>
                                    <Form.Control type="text" placeholder="Enter your address" {...register('address', inputValidation.address)} />
                                    <small className="text-danger"> {errors.address && errors.address.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <label className='order_form_label'>City</label>
                                    <Form.Control type="text" placeholder="Enter your city" {...register('city', inputValidation.city)} />
                                    <small className="text-danger"> {errors.city && errors.city.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 dropdown">
                                    <label className='order_form_label'>Country</label>
                                    <Form.Control type="text" placeholder="Enter your country" {...register('country', inputValidation.country)} />
                                    <small className="text-danger"> {errors.country && errors.country.message} </small>
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

                            <Col md={12}>
                                <div className="border_btn_container">
                                    { isLoading ? <Spinner animation={'border'} /> : <button className='save_btn mx-2'>Save</button> }
                                    {/*<button className='cancel_btn'>Cancel</button>*/}
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default CartDetails;
