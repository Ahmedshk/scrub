import React from 'react';
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";


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
    const data = [
        ["1", "Sub Admin"],
        ["2", "Super Admin"],
        ["3", "Supervisor"],
    ];

    return (
        <div className={'page_responsive'}>
            <h3> Role </h3>

            <div className={'create_product_btn'}>
                <button className='create_role' onClick={() => navigate('/admin/create-role')}>Create Role</button>
            </div>
            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};
export default Role;