import React from 'react';
import {Form, Container, Row, Col, Button} from "react-bootstrap";
import "./UploadPhoto.scss";

const UploadPhoto = () => {
    return (
        <div className={'page_responsive'}>
            <h3>Upload Photo on Scrub for Admin Approval</h3>

            <Form>
                <Container>
                    <Row className={'customer_upload_photo'}>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
};

export default UploadPhoto;
