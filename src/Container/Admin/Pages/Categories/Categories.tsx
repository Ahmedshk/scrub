import React from 'react';
import { useNavigate } from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { categoryData } from "../../../../hooks/admin";
import { Button } from 'react-bootstrap'

const Categories = () => {
    const navigate = useNavigate();
    const editCategoriesHandler = () => {
        navigate('/admin/create-categories/121')
    }
    let columns = [
        'ID',
        'Category Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={editCategoriesHandler}>
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
            <h3> Categories </h3>

            <div className={'create_product_btn'}>
                <Button className='all_btns' onClick={() => navigate('/admin/create-categories')}>Create Categories</Button>
            </div>
            <MuiDataTable data={categoryData} columns={columns} />
        </div>
    );
};
export default Categories;