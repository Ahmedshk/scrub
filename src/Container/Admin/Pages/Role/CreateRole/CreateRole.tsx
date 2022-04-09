import React from 'react';
import { Button, Form } from "react-bootstrap";
import inputValidation from "../../../../../lib/Validation";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CreatRoleInterface } from '../../../../../Interfaces/index'
import { successNotify } from "../../../../../Utils/toast";
import './CreateRole.scss'

const CreateRole = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isAddMode = !id;
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatRoleInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        successNotify('success')
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
                    <Form.Control {...register('roleName', inputValidation.roleName)} type="text" />
                    <small className="text-danger"> {errors.roleName && errors.roleName.message} </small>
                </Form.Group>


                <div className='checkbox_container'>
                    
                    <span>
                        Profile
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        Edit Pages
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        View Orders
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        Coupons
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        Shipping Cost
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        Taxes
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                     <span>
                        Products
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>


                    <span>
                        Categories
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>


                    <span>
                        Attributes
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                    <span>
                        Picture Approval
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
                
                    <span>
                        Review Approval
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
                
                    <span>
                        Edit Menu
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
            
                    <span>
                        Slider
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
                          
                    <span>
                        SEO
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
               

                
                    <span>
                        Create User
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
             

               
                    <span>
                        Role
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>
            
                    <span>
                        All Users
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </span>

                </div>

                <div className="d-flex justify-content-center">
                    <Button className='all_btns' type="submit">{!isAddMode ? "Update" : "Create"} Role</Button>
                </div>
            </Form>
        </div>
    );
};
export default CreateRole;
