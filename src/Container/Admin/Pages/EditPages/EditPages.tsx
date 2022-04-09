import React, { useState } from 'react'
import { Container, Col, Row, Form,Button } from 'react-bootstrap'
import './EditPages.scss'
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form"
import EditPageModal from "../../../../Components/Modal/Modal";
import Editor from '../../../../Components/Editor/Editor';
import {EditPagesInterface} from '../../../../Interfaces/index'
import {errorNotify,successNotify} from '../../../../Utils/toast'

const EditPages = () => {
    const [show, setShow] = useState(false);
    const { handleSubmit, reset, control } = useForm<EditPagesInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        if (!data.pagesCategory) {
            errorNotify("Please select any page")
        }
        else {
            console.log("data", data);
            successNotify("Success!")
            setShow(true)
            reset()
        }
    })
    const pageOptions = [
        { value: 'Home page', label: 'Home page' },
        { value: 'About Us', label: 'About Us' },
        { value: 'Contact Us', label: 'Contact Us' },
        { value: 'Privacy Policy', label: 'Privacy Policy' },
        { value: 'FAQ', label: 'FAQ' },
        { value: 'Return Policy', label: 'Return Policy' },
        { value: 'T&C', label: 'T&C' }
    ]

    const modal = (
        <EditPageModal size='md' modalTitle={"Page"} show={show} handleClose={() => setShow(false)}>
            <Editor />
        </EditPageModal>
    )
    

    return (
        <div className='page_responsive'>
            <h3>Edit Pages</h3>
            <Container>
                <Row>
                    <Form onSubmit={onSubmitHandler}>
                        <Col md={9} className='mt-3'>
                            <label>Select the page you want to edit</label>
                            <Controller
                                name="pagesCategory"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <Select
                                            {...field}
                                            options={pageOptions}

                                        />
                                    );
                                }}
                            />
                            <div className='edit_page_container'>
                                <div>
                                    <Button type="submit" className='all_btns'>Edit Page</Button>
                                </div>
                                <div>
                                    <Button type="submit" className='all_btns'>Create New Page</Button>
                                </div>
                            </div>
                        </Col>
                    </Form>
                </Row>
                {modal}
            </Container>
        </div>
    )
}
export default EditPages