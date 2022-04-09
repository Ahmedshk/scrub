import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Product from './Product/Product'
import ProductType from './ProductType/ProductType'
import { AiOutlineHome } from 'react-icons/ai'
import './Shop.scss'
import Banner from "../../../Components/Banner/Banner";

const Shop = () => {
  return (
    <React.Fragment>
      <Banner heading={'SHOP'} cssClass={'shop_main'} />
      <Container>
        <span className='home'><AiOutlineHome className='home_icon' /> / All Products</span>
        <Row>
          <Col md={3}>
            <ProductType />
          </Col>

          <Col md={9}>
            <Product />
          </Col>
        </Row>

      </Container>

    </React.Fragment>
  )
}

export default Shop