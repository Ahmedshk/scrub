import React from 'react';
import "./OrderDetails.scss";
import shirt from '../../../../assets/img/shirt.png';
import shirt2 from '../../../../assets/img/shirt2.png';
import shirt3 from '../../../../assets/img/shirt3.png';
import { Row, Col } from 'react-bootstrap';

const OrderDetails = () => {
    const cardData = [
        {
            id: 1,
            card_image: shirt3,
            price: "45.99",
            color: "Gray",
            size: "XL",
            Qty: "5"
        },

        {
            id: 2,
            card_image: shirt2,
            price: "50.99",
            size: "XL",
            color: "Sky Blue",
            Qty: "3"
        },
        {
            id: 3,
            card_image: shirt,
            color: "Navy",
            price: "70.99",
            size: "XL",
            Qty: "2"
        }
    ]
    return (
        <div className='order_cards_container mx-4'>

            <h4 className="your_order_head">YOUR ORDER</h4>

            {cardData.map((data) => {
                const { id, card_image, color, size, Qty, price } = data
                return (
                    <React.Fragment>
                        <Row className="mt-4" key={id}>
                            <Col md={3}>
                                <div className="image_background_color">
                                    <img className='card_image' width={100} height={100} src={card_image} alt={'img'}/>
                                </div>
                            </Col>

                            <Col md={9}>
                                <div className="card_inner_text">
                                    <b className='card_head'>WOMEN'S SCRUB TOP</b>
                                    <div>
                                        <small className="dress_price"><span className="dollar_sign">$</span> {price}</small>
                                    </div>
                                </div>

                                <div className="mt-2">
                                        <span className='color_sizing'>
                                            Size
                                        </span>

                                    <b className="mx-2 color_sizing_value">
                                        {size}
                                    </b>
                                </div>

                                <div>
                                        <span className="color_sizing">
                                            Color
                                        </span>

                                    <b className="mx-2 color_sizing_value">
                                        {color}
                                    </b>
                                </div>
                                <div>
                                        <span className="color_sizing ">
                                            Qty
                                        </span>

                                    <b className="mx-2 color_sizing_value">
                                        {Qty}
                                    </b>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                )
            })}

            <div className="delivery_container">
                <div className='mt-1'>
                    <strong className='delivery_text'>DELIVERY</strong>
                </div>
                <div>
                    <b className='dollar_sign'>$</b>
                    <span className='delivery_price'>05.99</span>
                </div>
            </div>
            <hr />
            <div className="total_container mt-2">
                <div className='mt-1'>
                    <strong className='total_text'>TOTAL</strong>
                </div>
                <div>
                    <b className='total_price'>$145.99</b>
                </div>
            </div>
        </div>

    );
};

export default OrderDetails;
