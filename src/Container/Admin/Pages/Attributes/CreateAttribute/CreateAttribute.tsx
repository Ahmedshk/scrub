import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from 'react-select';
// import "../Category.scss";
import { useForm, Controller } from "react-hook-form";
import { errorNotify, successNotify } from "../../../../../Utils/toast";
import inputValidation from '../../../../../lib/Validation';
import { AttributesInterface } from '../../../../../Interfaces/index'
import { useNavigate, useParams } from "react-router-dom";

const CreateAttribute = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<AttributesInterface>();
    const { id } = useParams();
    const isAddMode = !id;
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        successNotify('success')
        reset()

    })

    const AttributesOptions = [
        { value: 'mens', label: 'mens' },
        { value: 'women', label: 'women' },
        { value: 'child', label: 'child' }
    ]


    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} Attributes</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/attributes')}>Back</Button>
            </div>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Attribute Name</label>
                                        <Form.Control {...register('attributeName', inputValidation.attributeName)} type="text" />
                                        <small className="text-danger"> {errors.attributeName && errors.attributeName.message} </small>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <Button type="submit">{!isAddMode ? "Update" : "Create"} Attribute</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CreateAttribute;