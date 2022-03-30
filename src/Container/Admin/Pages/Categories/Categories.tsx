import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Select from 'react-select';
import "./Category.scss";

const Categories = () => {

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
                        <Form>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Category Name</label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <label>Parent Category</label>
                                    <Select options={CategoryOptions} />
                                </Col>
                                <Col md={8}>
                                    <Button>Add New Category</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={6}>
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
