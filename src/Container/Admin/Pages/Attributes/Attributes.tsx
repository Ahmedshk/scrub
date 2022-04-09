import React from 'react';
import { useNavigate } from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { categoryData } from "../../../../hooks/admin";
import { Button } from 'react-bootstrap'

const Attributes = () => {
    const navigate = useNavigate();
    const editAttributesHandler = () => {
        navigate('/admin/create-attributes/433')
    }
    let columns = [
        'ID',
        'Attribute Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={editAttributesHandler}>
                                Edit
                            </button>
                            <button className={'btn'}>
                                Delete
                            </button>
                        </React.Fragment>
                    )
                }
            },
        },
    ]

    return (
        <div className={'page_responsive'}>
            <h3> Attributes </h3>

            <div className={'create_product_btn'}>
                <Button className='all_btns' onClick={() => navigate('/admin/create-attributes')}>Create Attributes</Button>
            </div>
            <MuiDataTable data={categoryData} columns={columns} />
        </div>
    );
};
export default Attributes;