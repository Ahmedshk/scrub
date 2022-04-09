import React from 'react'
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import { Container } from 'react-bootstrap'
import { disputeData } from "../../../../hooks/admin";

const Dispute = () => {
    const columns = ['Order Id','Product Id','Product Name', {
        name: "Discription",
        options: {
            customBodyRender: (value: any, tableMeta: any) => {
                return (
                    <React.Fragment>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti, beatae aliquam.</p>
                    </React.Fragment>
                )
            }
        },
    }, {
            name: "Request",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <div className='d-flex'>
                                <button className={'btn mx-2'}>
                                    Deny
                                </button>
                                <button className={'btn'}>
                                    Approve
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }
            },
        },
    ]
    return (
        <div className='page_responsive'>
            <h3>Dispute Orders</h3>
            <Container>
                <MuiDataTable title="Dispute Orders" data={disputeData} columns={columns} />
            </Container>
        </div>
    )
}

export default Dispute