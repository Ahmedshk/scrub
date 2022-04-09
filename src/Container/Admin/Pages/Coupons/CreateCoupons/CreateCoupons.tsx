import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import inputValidation from "../../../../../lib/Validation";
import {useForm} from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";
import {CouponsInterface} from '../../../../../Interfaces/index'
import {successNotify} from "../../../../../Utils/toast";

const CreateCoupons = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const isAddMode = !id;
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CouponsInterface>();
    
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        successNotify('success')
        reset()
    })

    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} Coupon</h3>
            <div className={'create_product_btn'}>
                <Button className="all_btns" onClick={() => navigate('/admin/coupons')}>Back</Button>
            </div>
            <Container className={'mt-4'}>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" {...register('couponName', inputValidation.couponName)} placeholder="Enter Coupon Name" />
                            <small className="text-danger"> {errors.couponName && errors.couponName.message} </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" {...register('couponCode', inputValidation.couponCode)} placeholder="Enter Coupon Code" />
                            <small className="text-danger"> {errors.couponCode && errors.couponCode.message} </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="number" {...register('discountedPrice', inputValidation.discountedPrice)} placeholder="Enter Discount Price" />
                            <small className="text-danger"> {errors.discountedPrice && errors.discountedPrice.message} </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="number" {...register('limit', inputValidation.limit)} placeholder="Enter limit" />
                            <small className="text-danger"> {errors.limit && errors.limit.message} </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="date" {...register('expiry', inputValidation.expiry)} placeholder="Enter limit" />
                            <small className="text-danger"> {errors.expiry && errors.expiry.message} </small>
                        </Form.Group>

                        <div className="text-end">
                            <Button className="all_btns" type="submit">{!isAddMode ? "Update" : "Create"} Coupon</Button>
                        </div>
                    </Form>
            </Container>
        </div>
    );
};
export default CreateCoupons;