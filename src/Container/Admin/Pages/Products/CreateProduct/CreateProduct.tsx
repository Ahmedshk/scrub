import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import {useNavigate, useParams} from "react-router-dom";
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select';
import './CreateProduct.scss';
import {errorNotify, successNotify} from "../../../../../Utils/toast";
import inputValidation from '../../../../../lib/Validation';

type ProductInterface = {
    productName: string,
    productDescription: string;
    category: {
        label: string,
        value: string
    };
    attribute: {
        label: string,
        value: string
    };
    image: File;
    productPrice: string;
    discountedPrice: string;
    size: {
        label: string,
        value: string
    };
    productQuantity: number
}

const Products = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const isAddMode = !id;

    const [categoryOptions, setCategoryOptions] = useState<any>([]);
    const [attributes, setAttributes] = useState<any>([])
    const [sizes, setSizes] = useState<any>([])

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<ProductInterface>();

    const onSubmitHandler = handleSubmit((data) => {
        if (!data.attribute|| !data.category|| !data.size) {
            errorNotify("Please Select All fields")
        }
        else {
            console.log("data", data);
            successNotify('success')
            navigate('/admin/products')
            reset()
        }
    })

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
            <h3>{!isAddMode ? "Update" : "Create"} Products</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/products')}>Back</Button>
            </div>
            <Container>
                <Row>
                    <Col md={8} className="Products_container">
                        <Form onSubmit={onSubmitHandler}>
                            <div className="mt-3">
                                <Form.Group className="mb-3">
                                    <Form.Control type="text"  {...register('productName', inputValidation.productName)} placeholder="Enter Product Name" />
                                    <small className="text-danger"> {errors.productName && errors.productName.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('productDescription', inputValidation.productDescription)} placeholder="Enter Product Description" />
                                    <small className="text-danger"> {errors.productDescription && errors.productDescription.message} </small>
                                </Form.Group>

                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                isMulti
                                                options={categoryOptions}
                                                className="basic-multi-select mb-3"
                                                classNamePrefix="select"
                                                placeholder="Select Category"
                                            />
                                        );
                                    }}
                                />

                                <Controller
                                    name="attribute"
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                isMulti
                                                options={attributes}
                                                className="basic-multi-select mb-3"
                                                classNamePrefix="select"
                                                placeholder="Select Attribute"
                                            />
                                        );
                                    }}
                                />
                                <Form.Group className="mb-3">
                                    <Form.Control type="file" {...register('image', inputValidation.image)} placeholder="Select any image" />
                                    <small className="text-danger"> {errors.image && errors.image.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('productPrice', inputValidation.productPrice)} placeholder="Enter product price" />
                                    <small className="text-danger"> {errors.productPrice && errors.productPrice.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('discountedPrice', inputValidation.discountedPrice)} placeholder="Enter discounted price" />
                                    <small className="text-danger"> {errors.discountedPrice && errors.discountedPrice.message} </small>
                                </Form.Group>

                                <Controller
                                    name="size"
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                options={sizes}
                                                className="basic-multi-select mb-3"
                                                classNamePrefix="select"
                                                placeholder="Select Size"
                                            />
                                        );
                                    }}
                                />
                                <Form.Group className="mb-3">
                                    <Form.Control type="number" {...register('productQuantity', inputValidation.productQuantity)} placeholder="Enter product quantity" />
                                    <small className="text-danger"> {errors.productQuantity && errors.productQuantity.message} </small>
                                </Form.Group>
                            </div>
                            <div className="save_btn_container">
                                <button>{!isAddMode ? "Update" : "Create"} Product</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Products