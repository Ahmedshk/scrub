import React from 'react'
import { Container } from 'react-bootstrap'
import './Order.scss';
import MUIDataTable, { FilterType } from "mui-datatables";

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

const options: FilterType | any = {
    filterType: 'checkbox',
    selectableRows: false,
    responsive:"standard"
};

const Order = () => {
    return (
        <div className={'page_responsive'}>
            <h3>Order History</h3>
            <div className="table_container">
                <Container>
                    <div className="mt-4 table">
                        <MUIDataTable
                            title={""}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </div>

                    <div className='order_return_container'>
                        <button>Order Return</button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Order;