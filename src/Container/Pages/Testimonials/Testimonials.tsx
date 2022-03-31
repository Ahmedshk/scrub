import React from 'react';
import { Container, Col, Row } from "react-bootstrap"
import testimonialImage1 from '../../../assets/img/testimonial1.jpg'
import testimonialImage2 from '../../../assets/img/testimonial2.jpg'
import "./Testimonials.scss";
import {ImQuotesLeft} from "react-icons/im";
import Banner from "../../../Components/Banner/Banner";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            img: testimonialImage1,
            name: "JASMIN DESOVE",
            role: 'Nurse',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio'
        },
        {
            id: 2,
            img: testimonialImage2,
            name: "JASMIN DESOVE",
            role: 'Nurse',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio'
        },
        {
            id: 3,
            img:testimonialImage1,
            name: "JASMIN DESOVE",
            role: 'Nurse',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio'
        },
        {
            id: 4,
            img: testimonialImage2,
            name: "JASMIN DESOVE",
            role: 'Nurse',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio'
        },
    ]

    return (
        <React.Fragment>
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
                <Row className={'main_testimonials'}>
                    <Col md={10}>
                        {testimonialsData.map((data) => {
                            return (
                                <div className='d-flex round_container' key={data.id}>
                                    <div className='round_image'>
                                        <img src={data.img} width={200} height={200} alt={'img'}/>
                                    </div>
                                    <div className='text_container'>
                                        <h6 className='client_name'>{data.name}</h6>
                                        <small className='nursing_color'>{data.role}</small>

                                        <div className='d-flex'>
                                            <div className='inverted_commas'> <ImQuotesLeft /> </div>
                                            <div className='clientSay_container'>
                                                <p className='mt-3'>{data.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Testimonials;