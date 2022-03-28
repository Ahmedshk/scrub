import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import './Rewards.scss';
import cardImage1 from '../../../../assets/img/offer_gift.png'
import cardImage2 from '../../../../assets/img/offer_gift.png'
import cardImage3 from '../../../../assets/img/offer_gift.png'
import cardImage5 from '../../../../assets/img/offer_gift.png'

const GiftCard = () => {

    const cardData = [
        {
            id: 1,
            img: cardImage1,
        },
        {
            id: 2,
            img: cardImage2
        },
        {
            id: 3,
            img: cardImage3
        },
        {
            id: 4,
            img: cardImage5
        }
    ]

    return (
        <div className={'page_responsive'}>
            <h3>Rewards and Gift</h3>
            <div className="gift_container">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='total_balance'>
                            <span>
                                Total Balance: $90
                            </span>
                            </div>
                        </Col>

                        <Col md={6} className="mt-4">
                            <div className="dollar_spend_buy">
                            <span>
                                Rewards on Dollar spend
                            </span>
                            </div>
                        </Col>

                        <Col md={6} className="mt-4">
                            <div className="dollar_spend_buy">
                            <span>
                                Buy E-Gift Card
                            </span>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="total_rewards">
                            <span>
                                Total rewards: $10
                            </span>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='cards_container'>
                                {cardData.map((data) => {
                                    return (
                                        <div className="mt-4" key={data.id}>
                                            <Card>
                                                <input type= "checkbox" />
                                                <Card.Img className="img-fluid" variant="top" src={data.img} />
                                            </Card>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className= "buy_container">
                                <button>Buy</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default GiftCard