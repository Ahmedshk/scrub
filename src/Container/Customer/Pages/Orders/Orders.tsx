import React from 'react'
import './Order.scss';
import MuiTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {orderData} from "../../../../hooks/customers"
import {Button} from 'react-bootstrap'

const Order = () => {

    const columns = ["Order ID", "Product Name", "Order Date", "Price", "Status"];

    return (
        <div className={'page_responsive'}>
            <h3>Order History</h3>
            <div className="table_container">
                    <MuiTable data={orderData} columns={columns} />
                    <div className='order_return_container'>
                        <Button className='all_btns'>Order Return</Button>
                    </div>
            </div>
        </div>
    )
}
export default Order;