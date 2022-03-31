import React, {useState} from 'react';
import { Container, Row, Col, Form, Spinner} from 'react-bootstrap'
import "./Career.scss";
import Banner from "../../../Components/Banner/Banner";
import { useForm } from "react-hook-form";
import inputValidation from '../../../lib/Validation/Validation';

type JobApplication = {
    firstname: string,
    lastname: string,
    email: string,
    phone: number,
    applied: string,
    date: number
}

const Career = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<JobApplication>();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (data: JobApplication) => {
        setIsLoading(true)
        console.log("data", data);
        reset()
    };

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
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <h4>Job Application</h4>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Name</label>
                                            <Form.Control type="text" placeholder="First name" {...register('firstname', inputValidation.firstname)} />
                                            <small className="text-danger"> {errors.firstname && errors.firstname.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Last Name</label>
                                            <Form.Control type="text" placeholder="Last name" {...register('lastname', inputValidation.lastname)} />
                                            <small className="text-danger"> {errors.lastname && errors.lastname.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Email</label>
                                            <Form.Control type="email" placeholder="Enter email address" {...register('email', inputValidation.email)} />
                                            <small className="text-danger"> {errors.email && errors.email.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Phone</label>
                                            <Form.Control type="text" placeholder="Enter phone number" {...register('phone', inputValidation.phone)} />
                                            <small className="text-danger"> {errors.phone && errors.phone.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} className="mb-3">
                                        <label className='label_text'>What position are you applying for?</label>
                                        <Form.Select>
                                            <option hidden value={""}>Please Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Available start date</label>
                                            <Form.Control {...register('date', inputValidation.date)} type="date" />
                                            <small className="text-danger"> {errors.date && errors.date.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3">
                                            <label className='label_text'>Upload file</label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        {isLoading ? <Spinner animation={'border'} /> : <button className='submit_btn mt-4' type="submit"> Submit </button> }

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