import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import './EditPages.scss'
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form"
import EditPageModal from "../../../../Components/Modal/Modal";
import Editor from '../../../../Components/Editor/Editor';

type EditPagesInterface = {
    pagesCategory: {
        label: string,
        value: string
    }
}

const EditPages = () => {
    const [show, setShow] = useState(false);

    const { handleSubmit, reset, control } = useForm<EditPagesInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        if (!data.pagesCategory) {
            console.log("Please Select any Parent Category")
        }
        else {
            console.log("data", data);
            console.log('success')
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
            <React.Fragment>
                <Editor />
            </React.Fragment>
        </EditPageModal>
    )
    const handleShow = () => setShow(true);

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
                                    <button onClick={handleShow}>Edit Page</button>
                                </div>
                                <div>
                                    <button onClick={handleShow}>Create New Page</button>
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