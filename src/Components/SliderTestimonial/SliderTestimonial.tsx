import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
// @ts-ignore
import Slider from 'react-slick';
import testimonialImage1 from '../../assets/img/testimonial1.jpg';
import {ImQuotesLeft} from "react-icons/im";
import "./SliderTestimonial.scss"

const SliderTestimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
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
    const testimonialsData = [
        {
            id:1,
            img: testimonialImage1,
            name: 'Micheal',
            role: 'Nurse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.\n' +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.'
        },
        {
            id:2,
            img: testimonialImage1,
            name: 'Harry',
            role: 'Nurse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.\n' +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.'
        },
        {
            id:3,
            img: testimonialImage1,
            name: 'Harry Micheal',
            role: 'Nurse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.\n' +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.'
        },
        {
            id:4,
            img: testimonialImage1,
            name: 'Micheals',
            role: 'Nurse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.\n' +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.'
        },
    ]

    return (
        <Container className={'mb-5'}>
            <Row className={'justify-content-center'}>
                <Col md={9}>
                    <Slider {...settings}>
                        {
                            testimonialsData.map((testimonial) => {
                                return(
                                    <div key={testimonial.id} className='d-flex round_container'>
                                        <div className='Round_image'>
                                            <img className='circle_image' alt='img' src={testimonial.img} width={200} height={200} />
                                        </div>
                                        <div className='text_container'>
                                            <h6>{testimonial.name}</h6>
                                            <small className='nursing_color'>{testimonial.role}</small>
                                            <div className='d-flex'>
                                                <div className='inverted_commas'><ImQuotesLeft /></div>
                                                <div className='clientSay_container'><p className='mt-3 client_says'>{testimonial.text}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};
export default SliderTestimonial