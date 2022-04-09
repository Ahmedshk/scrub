import React from 'react';
import './Product.scss';
import { Container, Card } from 'react-bootstrap'
// @ts-ignore
import Slider from 'react-slick';
import ProductColors from "./ProductColors/ProductColors";
import { BsCart } from 'react-icons/bs'
import {allProductData} from "../../../../hooks/admin"
import { AiOutlineHeart } from 'react-icons/ai'


const Product = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

            <Container>
                <Slider {...settings} >
                    {
                        allProductData.map((data) => {
                            const { id, img, cardTitle, cardText } = data
                            return (
                                <div className='cursor_pointer' key={id}>
                                    <Card className="cards_slider">
                                        <Card.Img variant="top" className="card_img" src={img} height={300} />
                                        <div className='addToCard_container'>
                                            <div className='add_to_cart'>
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
                                            <button>Shop Now</button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </React.Fragment>
    )
}
export default Product