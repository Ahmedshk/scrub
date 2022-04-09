import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {OrderData} from "../../../../hooks/admin";
import {ORDER_KEY} from '../../../../Interfaces/index'

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

        {
            name: "Actions",
            options: {
                display: key === ORDER_KEY.pendingOrders,
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'}>
                                Accept
                            </button>
                            <button className={'btn'}>
                                Reject
                            </button>
                        </React.Fragment>
                    )
                }
            }
        },
        {
            name: "Actions",
            options: {
                display: key === ORDER_KEY.inProcessOrders,
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'}>
                                Completed
                            </button>
                        </React.Fragment>
                    )
                }
            }
        },
        
    ]

    return (
        <div className={'page_responsive'}>
            <h3> Manage Orders </h3>

            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k!)}
                className="mb-3 tabs"
            >
                <Tab eventKey={ORDER_KEY.totalOrder} title="Total" className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={OrderData} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.pendingOrders} title='Pending' className={'w-100'}>
                    <MuiDataTable title="Pending Orders" data={OrderData} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.inProcessOrders} title='In-Progress' className={'w-100'}>
                    <MuiDataTable title="InProcess Orders" data={OrderData} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.completedOrders} title='Completed' className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={OrderData} columns={columns} />
                </Tab>
                <Tab eventKey={ORDER_KEY.cancelledOrders} title='Cancelled' className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={OrderData} columns={columns} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Order;
