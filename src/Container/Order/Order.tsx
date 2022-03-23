import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import CartDetails from './CartDetails/CartDetails';
import OrderDetails from "./OrderDetails/OrderDetails";
import Offer from "../../Components/Offer/Offer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import "./Order.scss";

const Order = () => {
    return (
        <div className={'main_order'}>
            <Container>
                <Row>
                    <Col md={6} className="mt-4">
                        <CartDetails />
                    </Col>

                    <Col md={6}>
                        <OrderDetails />
                    </Col>
                </Row>
            </Container>

            <Offer />


            <Testimonial />



        </div>

    );
};
export default Order;