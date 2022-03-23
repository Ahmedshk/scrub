import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
// @ts-ignore
import Slider from 'react-slick';
import testimonialImage1 from '../../assets/img/testimonial1.jpg';
import "./Testimonial.scss"

const Testimonial = () => {

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

    return (
        <Container className={'mb-5'}>
            <Row className={'justify-content-center'}>
                <Col md={9}>
                    <Slider {...settings}>

                        <div className='d-flex Round_container'>
                            <div className='Round_image'>
                                <img className='circle_image'  src={testimonialImage1} width={200} height={200} />

                            </div>
                            <div className='text_container'>
                                <h6>Micheal Harry</h6>
                                <small className='nursing_color'>Nurse</small>

                                <div className='d-flex'>
                                    <div className='inverted_commas'>
                                        <img src='https://www.pinclipart.com/picdir/big/107-1073404_quotation-marks-blue-quote-sign-png-clipart.png' width={20} />
                                    </div>

                                    <div className='clientSay_container'>
                                        <p className='mt-3 client_says'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex Round_container'>
                            <div className='Round_image'>
                                <img  src={testimonialImage1} width={200} height={200} />
                            </div>
                            <div className='text_container'>
                                <h6>Micheal Harry</h6>
                                <small className='nursing_color'>Nurse</small>
                                <p className='mt-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                </p>
                            </div>
                        </div>

                        <div className='d-flex Round_container'>
                            <div className='Round_image'>
                                <img  src={testimonialImage1} width={200} height={200} />
                            </div>
                            <div className='text_container'>
                                <h6>Micheal Harry</h6>
                                <small className='nursing_color'>Nurse</small>
                                <p className='mt-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex Round_container'>
                            <div className='Round_image'>
                                <img  src={testimonialImage1} width={200} height={200} />
                            </div>
                            <div className='text_container'>
                                <h6>Micheal Harry</h6>
                                <small className='nursing_color'>Nurse</small>
                                <p className='mt-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex Round_container'>
                            <div className='Round_image'>
                                <img  src={testimonialImage1} width={200} height={200} />
                            </div>
                            <div className='text_container'>
                                <h6>Micheal Harry</h6>
                                <small className='nursing_color'>Nurse</small>
                                <p className='mt-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                </p>
                            </div>
                        </div>

                    </Slider>
                </Col>
            </Row>
        </Container>

    );
};

export default Testimonial;
