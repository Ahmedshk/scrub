import React from 'react';
import "./Product.scss";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Products = () => {
    const navigate = useNavigate();

    const editHandler = () => {
        navigate('/admin/edit-products');
    }

    let columns = [
        'ID',
        'Product Name',
        'Product Price',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn mr-3'}>
                            Delete
                        </button>
                    )
                }
            },
        },
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn'} onClick={editHandler}>
                            Edit
                        </button>
                    )
                }
            },
        }
    ]

    const data = [
        ["1", "Alabama", '2%'],
        ["2", "Alaska", '3%'],
        ["3", "Arizona", '1%'],
        ["4", "Arkansas", '2.5%'],
        ["4", "California", '3.3%'],
    ];

    return (
        <div className={'page_responsive'}>
            <h3> Products </h3>

            <div className={'create_product_btn'}>
                <Button>Create Product</Button>
            </div>

            <MuiDataTable data={data} columns={columns} />
        </div>
    );
};

export default Products;
