import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Spinner } from 'react-bootstrap';
import './Login.scss';
import { useForm } from "react-hook-form";
import inputValidation from '../../../lib/Validation/Validation';

type ILogin = {
    email: string,
    password: string,
}

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILogin>();
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = handleSubmit((data) => {
        setIsLoading(true)
        console.log("data", data);
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
                    <p className='text-center'>Don't have an account? <Link to="/register"><span className='sign_up'>SignUp</span></Link> </p>
                </Form>
            </Container>
    )
}

export default Login