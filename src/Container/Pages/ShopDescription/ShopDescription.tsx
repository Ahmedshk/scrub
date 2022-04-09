import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ProductImage from './ProductImage/ProductImage'
import ProductForm from './ProductForm/ProductForm'
import { AiOutlineHome } from 'react-icons/ai'
import Banner from "../../../Components/Banner/Banner";


const ShopDescription = () => {
    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <span className='home'><AiOutlineHome className='home_icon' /> / Men's Top / T-Shirts</span>
                <Row>
                    <Col md={6}>
                        <ProductImage />
                    </Col>

                    <Col md={6}>
                        <ProductForm />
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default ShopDescription