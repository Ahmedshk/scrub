import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form} from "react-bootstrap";
import {FiUpload} from "react-icons/fi";
import Card5 from "../../assets/img/card5.jpg";
import Select from 'react-select';
import "./Profile.scss";

const Profile: React.FC<any> = ({role, heading}) => {
    const [roleOptions, setRoleOptions] = useState<any>([]);

    useEffect(() => {
        setRoleOptions([
            { value: 'C One', label: 'C One' },
            { value: 'C Two', label: 'C Two' },
            { value: 'C Three', label: 'C Three' }
        ])
    }, [])
    return (
        <div className={'page_responsive'}>
            <h3>{heading}</h3>
            <Container>
                <Row className={'profile_section'}>
                    <Col md={9} className={'profile_img mb-2'}>
                        <img src={Card5} alt={'profile_img'} />
                    </Col>
                    <Col md={9} className={'d-flex justify-content-end mb-5 p-0'}>
                        <div className={'input_file'}>
                            <input
                                type="file"
                                name="file-input"
                                id="file-input"
                                className="file_input" />
                            <label className="file_label" htmlFor="file-input">
                                <FiUpload />
                                <span>Upload your photo</span>
                            </label>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter your Name" />
                        </Form.Group>
                    </Col>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                    </Col>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter your Contact Number" />
                        </Form.Group>
                    </Col>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter your Address" />
                        </Form.Group>
                    </Col>
                    {
                        role ? <Col md={9}>
                            <Select
                                defaultValue={''}
                                name="category"
                                options={roleOptions}
                                className="basic-multi-select mb-3"
                                classNamePrefix="select"
                                placeholder="Select Role"
                            />
                        </Col> : null
                    }

                    <Col md={9}>
                        <button className='submit_btn mt-4' type="submit">
                            Saves Changes
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Profile;