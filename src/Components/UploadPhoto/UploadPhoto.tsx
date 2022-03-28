import React from 'react';
import { Container, Col, Row} from 'react-bootstrap'
import {BsUpload} from 'react-icons/bs';
import "./UploadPhoto.scss";

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
                                <BsUpload />
                                <b>Upload your photo</b>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default UploadPhoto;