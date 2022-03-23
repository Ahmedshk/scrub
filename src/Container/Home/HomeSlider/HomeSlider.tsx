import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';
// @ts-ignore
import Slider from 'react-slick';
import PeoplesImage from '../../../assets/img/peoples_image1.png';
import "./HomeSlider.scss";


const HomeSlider = () => {

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", fontSize: "40px", color: "black" }}
                onClick={onClick}>
                <MdArrowForwardIos className='Forward_Arrow_icons' />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", fontSize: "40px", color: "black", marginLeft: "-15px" }}
                onClick={onClick}>
                <MdArrowBackIos  className='Previous_Arrow_icons' />
            </div>
        );
    }

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
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
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
        ]
    };

    return (
        <Container  className='main_container'>
            <Row>
                <Col md={12}>
                    <Slider {...settings} className='background_slider' >
                        <div className="caption_container">
                            <h3 className='feature_head'>FEATURING AFFORDABLE</h3>
                            <h5 className='accessories'>SCRUBS, MEDICAL <br /> ACCESSORIES</h5>
                            <small>Lorem ipsum dolor sit amet consectetur Eveniet velit cupiditate corrupti voluptatum!  </small>
                            <button className='shop_now'>Shop Now</button>
                        </div>

                        <div className='sliding_img_container'>
                            <img src={PeoplesImage} className='slider_rolling_image' alt={'img'} />
                        </div>

                        <div className="caption_container">
                            <h3 className='feature_head'>FEATURING AFFORDABLE</h3>
                            <h5 className='accessories'>SCRUBS, MEDICAL, ACCESSORIES</h5>
                            <p>Lorem ipsum dolor sit amet consectetur Eveniet velit cupiditate corrupti voluptatum!  </p>
                            <button className='shop_now'>Shop Now</button>
                        </div>

                        <div className='sliding_img_container'>
                            <img src={PeoplesImage} className='slider_rolling_image' alt={'img'} />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeSlider;
