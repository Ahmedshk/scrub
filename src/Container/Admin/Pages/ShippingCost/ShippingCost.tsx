import React from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap'
import './ShippingCost.scss'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';

type ShippingInterface = {
    shippingCost: number,
}

const ShippingCost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ShippingInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        console.log('success')
        reset()
    })
    return (
        <div className={'page_responsive'}>
            <h3>Shipping Cost</h3>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='shopping_container'>
                            <Form onSubmit={onSubmitHandler}>
                                <Form.Group className="mb-3 mt-4">
                                    <Form.Control type="number" {...register('shippingCost', inputValidation.shippingCost)} placeholder="Enter flat rate shipping cost" />
                                    <small className="text-danger"> {errors.shippingCost && errors.shippingCost.message} </small>
                                </Form.Group>
                                <div>
                                    <button>Save</button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingCost;