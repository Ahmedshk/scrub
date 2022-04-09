import React, {useState} from 'react';
import "./Product.scss";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import {productData} from "../../../../hooks/admin";
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


    return (
        <div className={'page_responsive'}>
            <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit}/>
            <h3> Products </h3>

            <div className={'create_product_btn'}>
                <Button className="all_btns" onClick={() => navigate('/admin/create-product')}>Create Product</Button>
            </div>
            <MuiDataTable data={productData} columns={columns} />
        </div>
    );
};

export default Products;
