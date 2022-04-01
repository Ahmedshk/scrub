import React from 'react';
import {Button, Form} from "react-bootstrap";
import inputValidation from "../../../../../lib/Validation";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";

type CreatRoleInterface = {
    roleName: string,
}

const CreateRole = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const isAddMode = !id;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatRoleInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        console.log('success')
        reset()
    })

    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} Role</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/role')}>Back</Button>
            </div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <label>Role Name</label>
                    <Form.Control {...register('roleName', inputValidation.roleName)} type="text"/>
                    <small className="text-danger"> {errors.roleName && errors.roleName.message} </small>
                </Form.Group>
                <div className="text-center">
                    <Button type="submit">{!isAddMode ? "Update" : "Create"} Role</Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateRole;
