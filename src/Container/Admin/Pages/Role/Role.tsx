import React from 'react';
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import {roleData} from "../../../../hooks/admin";
import {Button} from 'react-bootstrap'

const Role = () => {
    const navigate = useNavigate();
    const editRoleHandler = () => {
        navigate('/admin/edit-role/123')
    }
    let columns = [
        'ID',
        'Role Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn mr-3'} onClick={editRoleHandler}>
                            Edit
                        </button>
                    )
                }
            },
        },
    ]

    return (
        <div className={'page_responsive'}>
            <h3> Role </h3>

            <div className={'create_product_btn'}>
                <Button className='all_btns' onClick={() => navigate('/admin/create-role')}>Create Role</Button>
            </div>
            <MuiDataTable data={roleData} columns={columns} />
        </div>
    );
};
export default Role;