import React, { useEffect, useState } from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import Select from 'react-select';
import './CreateProduct.scss';

const CreateProduct = () => {
    const navigate = useNavigate();
    const [categoryOptions, setCategoryOptions] = useState<any>([]);
    const [attributes, setAttributes] = useState<any>([])
    const [sizes, setSizes] = useState<any>([])

    useEffect(() => {
        setCategoryOptions([
            { value: 'C One', label: 'C One' },
            { value: 'C Two', label: 'C Two' },
            { value: 'C Three', label: 'C Three' }
        ])
        setAttributes([
            { value: 'C One', label: 'C One' },
            { value: 'C Two', label: 'C Two' },
            { value: 'C Three', label: 'C Three' }
        ])
        setSizes([
            { value: 'Small', label: 'Small' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Large', label: 'Large' },
            { value: 'X-Large', label: 'X-Large' }
        ])
    }, [])

    return (
        <div className="page_responsive">
            <h3>Products</h3>

            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/products')}>Back</Button>
            </div>
            <Container>
                <Row>
                    <Col md={8} className="Products_container">
                        <div className="mt-3">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Product Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Product Description" />
                            </Form.Group>
                            <Select
                                defaultValue={''}
                                isMulti
                                name="category"
                                options={categoryOptions}
                                className="basic-multi-select mb-3"
                                classNamePrefix="select"
                                placeholder="Select Category"
                            />

                            <Select
                                defaultValue={''}
                                isMulti
                                name="attributes"
                                options={attributes}
                                className="basic-multi-select mb-0"
                                classNamePrefix="select"
                                placeholder="Select Attribute"
                            />

                            <Form.Group className="mb-3">
                                <Form.Control type="file" placeholder="Select any image" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter product price" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter discounted price" />
                            </Form.Group>

                            <Select
                                defaultValue={''}
                                name="sizes"
                                options={sizes}
                                className="basic-multi-select mb-3"
                                classNamePrefix="select"
                                placeholder="Select Size"
                            />

                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Enter product quantity" />
                            </Form.Group>
                        </div>
                        <div className="save_btn_container">
                            <button>Save</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateProduct;