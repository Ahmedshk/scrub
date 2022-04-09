import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';
import { ShippingInterface } from '../../../../Interfaces/index'

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
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Group className="mb-3 mt-4">
                                <Form.Control type="number" {...register('shippingCost', inputValidation.shippingCost)} placeholder="Enter flat rate shipping cost" />
                                <small className="text-danger"> {errors.shippingCost && errors.shippingCost.message} </small>
                            </Form.Group>
                            <div>
                                <Button type= "submit" className="all_btns">Save</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingCost;