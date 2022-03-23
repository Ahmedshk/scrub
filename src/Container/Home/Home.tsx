import React from 'react';
import HomeSlider from "./HomeSlider/HomeSlider";
import Products from "./Products/Product";
import CoverImage from '../../assets/img/cover_image1.png';
import gridImage from "../../assets/img/grid-image1.jpg";
import gridImage2 from "../../assets/img/grid-image2.jpg";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Brand from "../../Components/Brand/Brand";
import UploadPhoto from "../../Components/UploadPhoto/UploadPhoto";
import Offer from "../../Components/Offer/Offer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import "./Home.scss";

const Home = () => {
    return (
        <React.Fragment>
            <HomeSlider />
            <Container fluid className='cover_section_container' >
                <div className="cover_image">
                    <img src={CoverImage} className="img-fluid" alt={'cover_image1'} />
                </div>
            </Container>

            <Products />

            <Container className='Group_container'>
                <Row>
                    <Col sm={6}>
                        <div className='collection_images' >
                            <img className='image_collect' src={gridImage}/>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='collection_container'>
                            <h3 className='womens_collection_head'>WOMEN'S COLLECTION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam hic, ipsum, praesentium assumenda maiores beatae facilis tenetur modi ea sequi, deleniti dolores soluta. Maxime in iure accusantium voluptas ex.</p>
                            <Button className='btn_collection'>View Collection</Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <div className='caption_container mt-4'>
                            <h3 className='mens_collection_head'>MEN'S COLLECTION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam hic, ipsum, praesentium assumenda maiores beatae facilis tenetur modi ea sequi, deleniti dolores soluta. Maxime in iure accusantium voluptas ex.</p>
                            <Button className='btn_collection'>View Collection</Button>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='mt-4 images_container'>
                            <img className='image_collection' src={gridImage2} />
                        </div>
                    </Col>
                </Row>


            </Container>

            <div className={'group_look'}>
                <div className='Group_bg_image w-100 d-flex justify-content-center align-items-center'>
                    <div className='mt-2 w-50 text-center'>
                        <h1 className='cover_title'>Make Your Group Look and Feel their Very Best</h1>
                        <p className='cover_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe iure nostrum quod debitis et dolores, quasi quam qui expedita, adipisci tempore voluptatem ea illo labore beatae ipsam fugit eaque!</p>
                        <Button className='contact_btn'>Contact us</Button>
                    </div>
                </div>
            </div>

            <Brand />
            <UploadPhoto />
            <Offer />
            <Testimonial />

        </React.Fragment>
    );
};
export default Home;