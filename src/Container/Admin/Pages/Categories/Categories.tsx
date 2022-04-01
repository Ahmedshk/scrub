import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import "./Category.scss";
import { useForm, Controller } from "react-hook-form";
import {errorNotify} from "../../../../Utils/toast";
import inputValidation from '../../../../lib/Validation';

type CategoriesInterface = {
    categoryName: string,
    parentCategory: {
        label: string,
        value: string
    }
}

const Categories = () => {

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<CategoriesInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        if (!data.parentCategory) {
            errorNotify("Please Select any Parent Category")
        }
        else {
            console.log("data", data);
            console.log('success')
            reset()
        }

    })

    const CategoryOptions = [
        { value: 'mens', label: 'mens' },
        { value: 'women', label: 'women' },
        { value: 'child', label: 'child' }
    ]
    const countries = ['Canada', 'US', 'Chicago', 'Las Vegas']

    return (
        <div className={'page_responsive'}>
            <h3>Categories</h3>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <p> Add New Category </p>
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
                                    <label>Parent Category</label>
                                    <Controller
                                        name="parentCategory"
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <Select
                                                    {...field}
                                                    options={CategoryOptions}
                                                />
                                            );
                                        }}
                                    />
                                </Col>
                                <Col md={8}>
                                    <Button type ="submit">Add New Category</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={6} className="Bulk_actions">
                        <p> Bulk Actions </p>
                        {
                            countries.map((country) => (
                                <div key={`default-${country}`} className="mb-3">
                                    <Form.Check
                                        type='checkbox'
                                        id={`default-${country}`}
                                        label={country}
                                    />
                                </div>
                            ))
                        }
                        <Button>Apply</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Categories;