import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './OrderSummary.scss';
import { GrClose } from 'react-icons/gr';
import Banner from "../../../Components/Banner/Banner";
import { ProductData } from './ProductData';
import {useNavigate} from 'react-router-dom'

const OrderSummary = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const plus = () => {
        setValue(value + 1)
    }
    const minus = () => {
        setValue(value - 1)
    }
    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <h5 className='mt-4'>Order Summary</h5>
                <div className='summary_container'>
                    <Row className='product_head'>
                        <Col md={2}>
                            <h6>Product</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Color</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Size</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Amount</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Price</h6>
                        </Col>
                    </Row>

                    {ProductData.map((data) => {
                        const { id, color, size, img, price } = data
                        return (
                            <Row key={id} className="mb-4">
                                <Col md={3} xs={6}>
                                    <div className='summer_vibes_container'>
                                        <div className='img_container'>
                                            <img src={img} alt='product_logo' />
                                        </div>
                                        <div className='mt-4'>
                                            <b>SummerVibes</b>
                                            <p>#345490</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>{color}</span>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>{size}</span>
                                    </div>
                                </Col>
                                <Col md={2} xs={6}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <div className='plus_minus_container'>
                                            <div>
                                                <button onClick={minus} className='minus_btn'>-</button>
                                            </div>
                                            <p className='mt-2'>{value}</p>
                                            <div>
                                                <button onClick={plus} className='plus_btn'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <b>{price}</b>
                                    </div>
                                </Col>
                                <Col md={1} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>
                                            <GrClose className='cross_icon' />
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
                <Row>
                    <Col md={12}>
                        <div className='Total_cost_container'>
                            <div>
                                <span>TotalCost</span>
                                <b>$98.00</b>
                            </div>
                            <div>
                                <button className='continue_shopping'>CONTINUE SHOPPING</button>
                            </div>
                            <div>
                                <button className='next_step' onClick={()=> navigate("/address-data")}>NEXT STEP</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default OrderSummary