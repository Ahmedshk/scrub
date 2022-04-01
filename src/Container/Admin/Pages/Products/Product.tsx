import React, {useState} from 'react';
import "./Product.scss";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

const Products = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const editHandler = () => {
        navigate('/admin/edit-product/123');
    }

    let columns = [
        'Product ID',
        'Product Name',
        'Product Price',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                           <button className={'btn mx-2'} onClick={deleteProductHandler}>
                            Delete
                           </button>
                           <button className={'btn'} onClick={editHandler}>
                            Edit
                           </button>
                        </React.Fragment>
                    )
                }
            },
        },
    ]

    const deleteProductHandler = () => {
        setShow(!show)
    }
    const onDeleteSubmit = () => {
        setShow(!show)
    }

    const data = [
        ["1", "Alabama", '20'],
        ["2", "Alaska", '34'],
        ["3", "Arizona", '11'],
        ["4", "Arkansas", '21'],
        ["4", "California", '33'],
    ];

    return (
        <div className={'page_responsive'}>
            <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit}/>
            <h3> Products </h3>

            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/create-product')}>Create Product</Button>
            </div>
            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};

export default Products;
