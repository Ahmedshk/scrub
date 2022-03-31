import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import MenuModal from "../../../../Components/Modal/Modal";
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
                        <button className={'btn mr-3'} onClick={editMenuHandler}>
                            Edit
                        </button>
                    )
                }
            },
        },
    ]
    const data = [
        ["1", "Home"],
        ["2", "About"],
        ["3", "Contact"],
        ["4", "FAQ"],
    ];

    const editMenuHandler = () => {
        setShow(true)
    }

    const modal = (
        <MenuModal size='md' modalTitle={"Edit Menu"} show={show} handleClose={() => setShow(false)}>
            <Form>
                <Form.Group className="mb-3">
                    <label>Menu Name</label>
                    <Form.Control type="text"/>
                </Form.Group>
                <div className="text-center">
                    <Button>Update</Button>
                </div>
            </Form>
        </MenuModal>
    )

    return (
        <div className={'page_responsive'}>
            {modal}
            <h3> Edit Menu </h3>

            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};
export default CreateRole;