import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Spinner, Button } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import Card5 from "../../assets/img/card5.jpg";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { errorNotify } from "../../Utils/toast";
import inputValidation from '../../lib/Validation';
import "./Profile.scss";
import { ProfileInterface } from '../../Interfaces/index'
import {useNavigate} from 'react-router-dom';

const Profile: React.FC<any> = ({ role, heading }) => {
    const navigate = useNavigate()
    const [roleOptions, setRoleOptions] = useState<any>([]);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<ProfileInterface>();
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setRoleOptions([
            { value: 'C One', label: 'C One' },
            { value: 'C Two', label: 'C Two' },
            { value: 'C Three', label: 'C Three' }
        ])
    }, [])

    const onSubmitHandler = handleSubmit((data) => {
        setIsLoading(true)
        if (role) {
            if (!data.role) {
                setIsLoading(false)
                errorNotify('please select role')
            }
            else {
                setIsLoading(false)
                console.log("success", data);
            }
        }
        else {
            setIsLoading(false)
            console.log('success', data)
        }
        reset()
    })
    return (
        <div className={'page_responsive'}>
            <h3>{heading}</h3>
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <Row className={'profile_section'}>
                        <Col md={9} className={'profile_img mb-2'}>
                            <img src={Card5} alt={'profile_img'} />
                        </Col>
                        <Col md={9} className={'d-flex justify-content-end mb-5 p-0'}>
                            <div className={'input_file'}>
                                <input
                                    type="file"
                                    id="file-input"
                                    {...register('image')}
                                    className="file_input" />
                                <label className="file_label" htmlFor="file-input">
                                    <FiUpload />
                                    <span>Upload your photo</span>
                                </label>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" {...register('name', inputValidation.name)} placeholder="Enter your Name" />
                                <small className="text-danger"> {errors.name && errors.name.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" {...register('email', inputValidation.email)} placeholder="Enter your Email" />
                                <small className="text-danger"> {errors.email && errors.email.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" {...register('contactNo', inputValidation.contactNo)} placeholder="Enter your Contact Number" />
                                <small className="text-danger"> {errors.contactNo && errors.contactNo.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" {...register('address', inputValidation.address)} placeholder="Enter your Address" />
                                <small className="text-danger"> {errors.address && errors.address.message} </small>
                            </Form.Group>
                        </Col>
                        {
                            role ? <Col md={9}>
                                <Controller
                                    name="role"
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                options={roleOptions}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                placeholder="Select Role"
                                            />
                                        );
                                    }}
                                />
                            </Col> : null
                        }
                        <Col md={9}>
                            <div className='text-center'>
                                {isLoading ? <Spinner className='mt-3' animation={'border'} /> :
                                    <Button className='all_btns' type="submit">
                                        Save Changes
                                    </Button>
                                }
                            </div>

                            <div>
                                <Button className='all_btns mx-2' onClick={()=>navigate("/reset-password")}>Update Password</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};
export default Profile;