import React from 'react';
import { Container, Col, Row} from 'react-bootstrap'
import {BsUpload} from 'react-icons/bs';
import "./UploadPhoto.scss";

const UploadPhoto = () => {
    return (
        <Container className={'upload_photo_section'}>
            <Row>
                <Col md={6}>
                    <div className='Add_your_photo' >
                        <div className='inner_add_photo'>
                            <h3>Add your Photo</h3>
                            <span className='with_us_text' >With US</span>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='upload_photo d-flex justify-content-center align-items-center'>
                        <div className='inner_upload_photo mt-4 text-center d-flex justify-content-center align-items-center'>
                            <BsUpload className='upload_icon'/>
                            <b>Upload your photo</b>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default UploadPhoto;
