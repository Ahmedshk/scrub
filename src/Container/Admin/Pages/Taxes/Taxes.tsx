import React, { useState } from 'react';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { taxesData } from "../../../../hooks/admin";
import TaxesModal from '../../../../Components/Modal/Modal'
import { Form } from 'react-bootstrap'
import inputValidation from '../../../../lib/Validation';
import { TexInterface } from '../../../../Interfaces/index'
import { useForm } from "react-hook-form";


const Taxes = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TexInterface>();
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        console.log('success')
        reset()
    })


    let columns = [
        'ID',
        'State Name',
        'Tax%',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={() => setShow(true)}>
                                Edit
                            </button>

                        </React.Fragment>
                    )
                }
            },
        }
    ]


    return (
        <div className={'page_responsive'}>
            <h3>Taxes</h3>
            <MuiDataTable data={taxesData} columns={columns} />
            <TaxesModal size={"lg"} show={show} modalTitle={"Edit Tax"} handleClose={handleClose}>
                <React.Fragment>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Control {...register('taxPercent', inputValidation.taxPercent)} placeholder="Enter Tax Percentage" type="text" />
                        <small className="text-danger"> {errors.taxPercent && errors.taxPercent.message} </small>
                        <div className='text-center mt-3'>
                            <button className={'btn'}>
                                Save
                            </button>
                        </div>
                    </Form>
                </React.Fragment>
            </TaxesModal>

        </div>
    );
};
export default Taxes;