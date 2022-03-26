import React from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap'
import "./Career.scss";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Banner from "../../Components/Banner/Banner";

const Career = () => {
    const [value, setValue] = React.useState(null);
    return (
        <React.Fragment>
            <Banner heading={'CAREERS'} cssClass={'about_main'} />
            <Container className='my-4'>
                <Row>
                    <Col md={6}>
                        <div className='text_container'>
                            <h2>Lorem Ipsum Is Dummy Text</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid, aliquam autem dolores praesentium fugiat consequuntur doloribus molestias, odio eius esse architecto impedit nam a non delectus nesciunt earum. Molestiae!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique nobis enim ex molestias facere debitis eaque quo voluptatibus suscipit illo ea libero, velit temporibus natus molestiae, pariatur commodi illum.</p>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero nulla cumque magnam vitae dignissimos reprehenderit ratione dolore quis? Ipsum cupiditate molestias maiores alias magnam ex libero veritatis ratione saepe.</p>
                        </div>
                    </Col>
                    <Col className='mt-3 border-box' md={6}>
                        <div className='form_container'>
                            <Form>
                                <h4>Job Application</h4>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Name</label>
                                            <Form.Control type="text" placeholder="First name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Last Name</label>
                                            <Form.Control type="text" placeholder="Last name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Email</label>
                                            <Form.Control type="email" placeholder="Enter email address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Phone</label>
                                            <Form.Control type="text" placeholder="Enter phone number" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <label className='label_text'>What position are you applying for?</label>
                                        <Form.Select>
                                            <option>Please select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                value={value}
                                                label="Available start date"
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Upload file</label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                    <button className='submit_btn mt-4' type="submit">
                                            Submit
                                        </button>
                                    </Col>

                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Career;