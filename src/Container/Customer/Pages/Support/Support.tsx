import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import './Support.scss'

const Support = () => {
    return (
        <div className={'page_responsive'}>
            <h3>Contact Support</h3>
            <div className="main">
                <Container>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" autoComplete="off" placeholder="Subject" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Control autoComplete="off" as="textarea" rows={6} placeholder="Message" />
                            </Form.Group>
                            <button className="submit_btn">Submit</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Support;