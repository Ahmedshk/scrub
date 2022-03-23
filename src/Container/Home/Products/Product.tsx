import React from 'react';
import './Product.scss';
import { Container, Col, Row, Card } from 'react-bootstrap'
// @ts-ignore
import Slider from 'react-slick';
import ProductColors from "./ProductColors/ProductColors";
import { BsCart } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import Card1 from '../../../assets/img/card1.jpg'
import Card2 from '../../../assets/img/card2.jpg'
import Card3 from '../../../assets/img/card3.jpg'
import Card4 from '../../../assets/img/card4.jpg'
import Card5 from '../../../assets/img/card5.jpg'
import Card6 from '../../../assets/img/card6.jpg'
import Card7 from '../../../assets/img/card7.jpg'
import Card8 from '../../../assets/img/card8.jpg'

const CardSlider = () => {

    const cardData = [
        {
            id: 1,
            img: Card1,
            cardTitle: "Men's Wear",
            cardText: "$56.00",
        },

        {
            id: 2,
            img: Card2,
            cardTitle: "Men's Wear",
            cardText: "$76.00",
        },

        {
            id: 3,
            img: Card3,
            cardTitle: "Men's Wear",
            cardText: "$60.00",
        },

        {
            id: 4,
            img: Card4,
            cardTitle: "Men's Wear",
            cardText: "34.00",
        },

        {
            id: 5,
            img: Card5,
            cardTitle: "Men's Wear",
            cardText: "$43.00",
        },

        {
            id: 6,
            img: Card6,
            cardTitle: "Men's Wear",
            cardText: "$103.00",
        },

        {
            id: 7,
            img: Card7,
            cardTitle: "Men's Wear",
            cardText: "$90.822",
        },

        {
            id: 8,
            img: Card8,
            cardTitle: "Men's Wear",
            cardText: "$67.00",
        },
        {
            id: 9,
            img: Card2,
            cardTitle: "Men's Wear",
            cardText: "$70.00",
        },

    ]


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
            <React.Fragment>
                <ProductColors />

            <Container fluid="md">

                <Row>
                    <Col>
                        <Slider {...settings} >

                            {
                                cardData.map((data) => {
                                    const { id, img, cardTitle, cardText } = data
                                    return (
                                        <div className='cursor_pointer' key={id}>
                                            <Card className="cards_slider" >
                                                <Card.Img variant="top" className="card_img" src={img} height={300} />
                                                <div className='addToCard_container'>
                                                    <div className='add_tocart'>
                                                        <BsCart />
                                                    </div>
                                                    <div className='heart_container'>
                                                        <AiOutlineHeart />
                                                    </div>
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {cardTitle}
                                                    </Card.Title>

                                                    <Card.Text>
                                                        {cardText}
                                                    </Card.Text>
                                                    <button className='btn_shop_now'>Shop Now</button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }

                        </Slider>

                    </Col>

                </Row>

            </Container>
            </React.Fragment>

    )
}

export default CardSlider
