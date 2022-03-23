import React from 'react';
import { Container, Col, Row } from "react-bootstrap"
import testimonialImage1 from '../../assets/img/testimonial1.jpg'
import testimonialImage2 from '../../assets/img/testimonial2.jpg'
import "./Testimonials.scss";
import Banner from "../../Components/Banner/Banner";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            img: testimonialImage1,
            name: "JASMIN DESOVE"

        },
        {
            id: 2,
            img: testimonialImage2,
            name: "JASMIN DESOVE"

        },
        {
            id: 3,
            img:testimonialImage1 ,
            name: "JASMIN DESOVE"

        },
        {
            id: 4,
            img: testimonialImage2,
            name: "JASMIN DESOVE"

        },
    ]

    return (
        <>
            <Banner heading={'TESTIMONIALS'} cssClass={'about_main'} />
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='container_text text-center mt-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        {testimonialsData.map((data) => {
                            const {id,img,name} = data
                            return (
                                <div className='d-flex Round_container' key={id}>

                                    <div className='Round_image'>
                                        <img className='circle_image' src={img} width={200} height={200} />
                                    </div>

                                    <div className='text_container'>

                                        <h6 className='client_name'>{name}</h6>
                                        <small className='nursing_color'>Nurse</small>

                                        <div className='d-flex'>
                                            <div className='inverted_commas'>
                                                <img src='https://www.pinclipart.com/picdir/big/107-1073404_quotation-marks-blue-quote-sign-png-clipart.png' width={20} />
                                            </div>

                                            <div className='clientSay_container'>
                                                <p className='mt-3'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui consequuntur aspernatur perferendis molestias repellat aut eveniet fugiat nemo laudantium quidem deserunt fuga dolor reprehenderit corrupti, ullam similique laboriosam quas.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;
