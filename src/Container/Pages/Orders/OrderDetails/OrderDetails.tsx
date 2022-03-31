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
            name: 'WOMEN\'S SCRUB TOP',
            img: shirt3,
            price: "45.99",
            color: "Gray",
            size: "XL",
            Qty: "5"
        },

        {
            id: 2,
            name: 'WOMEN\'S SCRUB TOP',
            img: shirt2,
            price: "50.99",
            size: "XL",
            color: "Sky Blue",
            Qty: "3"
        },
        {
            id: 3,
            name: 'WOMEN\'S SCRUB TOP',
            img: shirt,
            color: "Navy",
            price: "70.99",
            size: "XL",
            Qty: "2"
        }
    ]
    return (
        <div className='order_cards_container'>
            <h4> YOUR ORDER </h4>

            {cardData.map((data) => {
                return (
                    <React.Fragment>
                        <Row className="mt-4" key={data.id}>
                            <Col md={3}>
                                <div className="image_background_color">
                                    <img width={100} height={100} src={data.img} alt={'img'}/>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="card_inner_text">
                                    <p>{data.name}</p>
                                   <small className="text-muted"><span className="dollar_sign">$</span> {data.price}</small>
                                </div>
                                <div className="card_details">
                                    <div>
                                        <span> Size : </span>
                                        <b> {data.size} </b>
                                    </div>
                                    <div>
                                        <span> Color: </span>
                                        <b> {data.color} </b>
                                    </div>
                                    <div>
                                        <span> Qty: </span>
                                        <b> {data.Qty} </b>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                )
            })}
            <div className="delivery_container">
                <strong> DELIVERY </strong>
                <div> <p> $ 50.99</p> </div>
            </div>
            <hr />
            <div className="delivery_container">
                <strong> TOTAL </strong>
                <div> <p> $ 145.99</p> </div>
            </div>
        </div>
    );
};
export default OrderDetails;