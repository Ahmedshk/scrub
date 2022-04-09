import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import "../Category.scss";
import { useForm, Controller } from "react-hook-form";
import { errorNotify, successNotify } from "../../../../../Utils/toast";
import inputValidation from '../../../../../lib/Validation';
import { CategoriesInterface } from '../../../../../Interfaces/index'
import { useNavigate, useParams } from "react-router-dom";

const CreateCategory = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<CategoriesInterface>();
    const { id } = useParams();
    const isAddMode = !id;
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        successNotify('success')
        reset()
    })

    const CategoryOptions = [
        { value: 'mens', label: 'mens' },
        { value: 'women', label: 'women' },
        { value: 'child', label: 'child' }
    ]


    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} Categories</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/categories')}>Back</Button>
            </div>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Category Name</label>
                                        <Form.Control {...register('categoryName', inputValidation.categoryName)} type="text" />
                                        <small className="text-danger"> {errors.categoryName && errors.categoryName.message} </small>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <Button type="submit">{!isAddMode ? "Update" : "Create"} Category</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CreateCategory;