import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';

enum ORDER_KEY {
    totalOrder = "TotalOrders",
    pendingOrders = "PendingOrders",
    inProcessOrders = "InProcessOrders",
    completedOrders = "CompletedOrders",
    cancelledOrders = "CancelledOrders"
}

const Order = () => {
    const [key, setKey] = useState<string>(ORDER_KEY.totalOrder)

    let columns = [
        "ID",
        'Product Name',
        'Order Date',
        'Price',
        {
            name: "Status",
            options: {
                display: key === ORDER_KEY.totalOrder,
            }
        },
    ]
    const data = [
        ["1", "Shirts", "22-03-22", "$12", 'Completed'],
        ["2", "Pents", "24-03-22", "$18", 'Pending'],
        ["3", "Jeans", "25-03-22", "$20", 'InProcess'],
        ["4", "Trousers", "26-03-22", "$30", 'Cancelled'],
    ];

    return (
        <div className={'page_responsive'}>
            <h3> Manage Orders </h3>

            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k!)}
                className="mb-3 tabs"
            >
                <Tab eventKey={ORDER_KEY.totalOrder} title="Total" className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={data} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.pendingOrders} title='Pending' className={'w-100'}>
                    <MuiDataTable title="Pending Orders" data={data} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.inProcessOrders} title='In-Progress' className={'w-100'}>
                    <MuiDataTable title="InProcess Orders" data={data} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.completedOrders} title='Completed' className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={data} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.cancelledOrders} title='Cancelled' className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={data} columns={columns} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Order;
