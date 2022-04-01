import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form"
import {errorNotify} from "../../../../Utils/toast";
import inputValidation from '../../../../lib/Validation';

type AttributesInterface = {
    attributeName: string,
    parentAttribute: {
        label: string,
        value: string
    }
}

const Attributes = () => {

    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<AttributesInterface>();

    const onSubmitHandler = handleSubmit((data) => {
        if (!data.parentAttribute) {
            errorNotify("Please Select any Parent Attribute")
        }
        else {
            console.log("data", data);
            console.log('success')
            reset()
        }

    })

    const AttributesOptions = [
        { value: 'mens', label: 'mens' },
        { value: 'women', label: 'women' },
        { value: 'child', label: 'child' }
    ]

    const countries = ['Canada', 'US', 'Chicago', 'Las Vegas']

    return (
        <div className={'page_responsive'}>
            <h3> Attributes </h3>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <p> Add New Attributes </p>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Attribute Name</label>
                                        <Form.Control type="text" {...register('attributeName', inputValidation.attributeName)} />
                                        <small className="text-danger"> {errors.attributeName && errors.attributeName.message} </small>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <label>Parent Attributes</label>
                                    <Controller
                                        name="parentAttribute"
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <Select options={AttributesOptions}
                                                        {...field}
                                                />
                                            );
                                        }}
                                    />
                                </Col>
                                <Col md={8}>
                                    <Button type= "submit">Add New Attributes</Button>
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

export default Attributes;