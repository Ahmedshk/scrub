import React from 'react';
import { Container, Col, Row, Form} from 'react-bootstrap'
import "./UploadPhoto.scss";
import {FiUpload} from "react-icons/fi";

const UploadPhoto = () => {
    return (
        <div className={'upload_photo_section'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='add_your_photo' >
                            <div className='inner_add_photo'>
                                <h3>Add your Photo</h3>
                                <span> With US </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='upload_photo'>
                            <div className='inner_upload_photo'>
                                <div className={'upload_img'}>
                                    <Form>
                                        <input
                                            type="file"
                                            name="file-input"
                                            id="file-input"
                                            className="file_input" />
                                        <label className="file_label" htmlFor="file-input">
                                            <FiUpload />
                                            <span>Upload your photo</span>
                                        </label>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default UploadPhoto;