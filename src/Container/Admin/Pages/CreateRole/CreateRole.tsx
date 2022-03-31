import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import RoleModal from "../../../../Components/Modal/Modal";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const CreateRole = () => {
    const [show, setShow] = useState(false);
    let columns = [
        'ID',
        'Role Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn mr-3'}>
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

    const createRoleHandler = () => {
        setShow(true)
    }

    const modal = (
        <RoleModal size='md' modalTitle={"Create Role"} show={show} handleClose={() => setShow(false)}>
            <Form>
                <Form.Group className="mb-3">
                    <label>Role Name</label>
                    <Form.Control type="text"/>
                </Form.Group>
                <div className="text-center">
                    <Button>Create</Button>
                </div>
            </Form>
        </RoleModal>
    )

    return (
        <div className={'page_responsive'}>
            {modal}
            <h3> Role </h3>

            <div className={'create_product_btn'}>
                <Button onClick={createRoleHandler}>Create Role</Button>
            </div>

            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};
export default CreateRole;