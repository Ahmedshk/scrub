import React,{useState} from 'react'
import { Container, Form, Spinner } from 'react-bootstrap'
import './ResetPassword.scss'
import { useForm } from "react-hook-form";
import inputValidation from '../../../lib/Validation';

type IResetPass = {
    password: string,
    confirmPassword: string
}

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IResetPass>();
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = handleSubmit((data) => {
        setIsLoading(true)
        console.log("data", data);
        reset()
    })
    return (
        <React.Fragment>
            <Container className='reset_form'>
                <div className="text">
                    Reset Password
                </div>
                <Form onSubmit={onSubmit}>
                    <div className='reset_data'>
                        <Form.Group className="mb-3">
                            <label>Password</label>
                            <Form.Control type="password" {...register('password', inputValidation.password)} placeholder="Enter your new password" />
                            <small className="text-danger"> {errors.password && errors.password.message} </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label>Re-type Password</label>
                            <Form.Control type="password" {...register('confirmPassword', inputValidation.confirmPassword)} placeholder="Re-enter your password" />
                            <small className="text-danger"> {errors.confirmPassword && errors.confirmPassword.message} </small>
                        </Form.Group>
                    </div>
                    <div className='text-center'>
                        {isLoading ? <Spinner className='mt-3' animation={'border'} /> :
                            <button className="reset_btn">
                                Reset password
                            </button>
                        }
                    </div>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default ResetPassword;