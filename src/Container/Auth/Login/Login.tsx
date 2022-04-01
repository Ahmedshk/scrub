import React, { useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import { Container, Form, Spinner } from 'react-bootstrap';
import './Login.scss';
import { useForm } from "react-hook-form";
import inputValidation from '../../../lib/Validation';
import {USER_ROLE} from "../../../App";

type ILogin = {
    email: string,
    password: string,
    role: string
}

export enum LoginType {
    customer = '/login',
    admin = "/admin/login"
}

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const [loginType, setLoginType] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<ILogin>();

    useEffect(() => {
        switch (location.pathname) {
            case LoginType.customer:
                setValue("role", USER_ROLE.CUSTOMER)
                setLoginType(LoginType.customer)
                break;

            case LoginType.admin:
                setValue("role", USER_ROLE.ADMIN)
                setLoginType(LoginType.admin)
                break;
        }
    }, [])
    const onSubmit = handleSubmit((data) => {
        setIsLoading(true)
        switch (loginType) {
            case LoginType.admin:
                navigate('/admin/profile')
                break;
            case LoginType.customer:
                navigate('/customer/profile')
                break;
        }
        reset()
    })

    return (
        <Container className='login_form'>
                <div className="text">
                    Login
                </div>
                <Form onSubmit={onSubmit}>
                    <div className='data'>
                        <Form.Group className="mb-3">
                            <label>Email Address</label>
                            <Form.Control type="email" autoComplete='off' {...register('email', inputValidation.email)} placeholder="Enter email address" />
                            <small className="text-danger"> {errors.email && errors.email.message} </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <label>Password</label>
                            <Form.Control type="password" autoComplete='off' {...register('password', inputValidation.password)} placeholder="Enter password" />
                            <small className="text-danger"> {errors.password && errors.password.message} </small>
                        </Form.Group>
                    </div>

                    <Link to="/forget-password"> <p className="forget_pass">Forgot Password?</p> </Link>

                    <div className='text-center'>
                        {isLoading ? <Spinner className='mt-3' animation={'border'} /> :
                            <button className="main_login">
                                login
                            </button>
                        }
                    </div>
                    {
                        loginType !== LoginType.admin ?
                            <p className='text-center'>Don't have an account? <Link to="/register"><span className='sign_up'>SignUp</span></Link> </p>
                             : null
                    }
                </Form>
            </Container>
    )
}

export default Login