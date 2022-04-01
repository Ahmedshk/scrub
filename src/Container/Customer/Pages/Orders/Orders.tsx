import React from 'react'
import './Order.scss';
import MuiTable from '../../../../Components/MuiDataTable/MuiDataTable';

const Order = () => {

    const columns = ["Order ID", "Product Name", "Order Date", "Price", "Status"];

    const data = [
        ["1", "Shirts", "22-03-22", "$12", 'approved'],
        ["2", "Pents", "24-03-22", "$18", 'cancelled'],
        ["3", "Jeans", "25-03-22", "$20", 'approved'],
        ["4", "Trousers", "26-03-22", "$30", 'cancelled'],
    ];

    return (
        <div className={'page_responsive'}>
            <h3>Order History</h3>
            <div className="table_container">
                    <MuiTable data={data} columns={columns} />
                    <div className='order_return_container'>
                        <button>Order Return</button>
                    </div>
            </div>
        </div>
    )
}
export default Order;