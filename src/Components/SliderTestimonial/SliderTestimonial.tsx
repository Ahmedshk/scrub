import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
// @ts-ignore
import Slider from 'react-slick';
import {testimonialsData} from "../../hooks/others/testimonials";
import {ImQuotesLeft} from "react-icons/im";
import "./SliderTestimonial.scss"

const SliderTestimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    

    return (
        <Container className={'mb-5'}>
            <Row className={'justify-content-center'}>
                <Col md={9}>
                    <Slider {...settings}>
                        {
                            testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className='d-flex round_container'>
                                        <div className='Round_image'>
                                            <img className='circle_image' alt='img' src={testimonial.img} width={200} height={200} />
                                        </div>
                                        <div className='text_container'>
                                            <h6>{testimonial.name}</h6>
                                            <small className='nursing_color'>{testimonial.role}</small>
                                            <div className='d-flex'>
                                                <div className='inverted_commas'><ImQuotesLeft /></div>
                                                <div className='clientSay_container'><p className='mt-3 client_says'>{testimonial.comment}</p></div>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};
export default SliderTestimonial