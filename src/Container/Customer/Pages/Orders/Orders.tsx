import React from 'react'
import './Order.scss';
import MuiTable from '../../../../Components/MuiDataTable/MuiDataTable';

const Order = () => {

    const columns = ["Order ID", "Product Name", "Order Date", "Price", {
        name: "Status",
        options: {
            customBodyRender: (value: any, tableMeta: any) => {
                return (
                    <button className={'submit_btn'}>
                        Submit
                    </button>
                )
            }
        },
    }];

    const data = [
        ["1", "Shirts", "22-03-22", "$12"],
        ["2", "Pents", "24-03-22", "$18"],
        ["3", "Jeans", "25-03-22", "$20"],
        ["4", "Trousers", "26-03-22", "$30"],
    ];

    return (
        <div className={'page_responsive'}>
            <h3>Order History</h3>
            <div className="table_container">
                    <MuiTable
                        data={data}
                        columns={columns}
                    />
                    <div className='order_return_container'>
                        <button>Order Return</button>
                    </div>
            </div>
        </div>
    )
}

export default Order;