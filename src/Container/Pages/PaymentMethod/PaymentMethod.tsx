import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import SelectionMethod from './SelectionMethod/SelectionMethod'
import AddressDeliveryMethod from './AddressDeliveryMethod/AddressDeliveryMethod'
import Banner from "../../../Components/Banner/Banner";

const PaymentMethod = () => {
    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <Row className='mt-3'>
                    <Col md={8}>
                     <SelectionMethod/>
                    </Col>

                    <Col md={4}>
                      <AddressDeliveryMethod/>
                    </Col>
                </Row>

            </Container>

        </React.Fragment>
    )
}

export default PaymentMethod