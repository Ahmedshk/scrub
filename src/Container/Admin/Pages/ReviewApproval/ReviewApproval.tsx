import React from 'react'
import './ReviewApproval.scss'
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { Container } from 'react-bootstrap'
import RatingStar from '../../../../Components/RatingStars/RatingStar';

const ReviewApproval = () => {

    const columns = ["Username", "User review", "Product",
        {
            name: "Rating Star",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <RatingStar avgRating={4} />
                    )
                }
            },
        }
        , {
            name: "Status",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <div className="buttons_container">
                            <div>
                                <button className={'submit_btn'}>
                                    Approve
                                </button>
                            </div>
                            <div>
                                <button className={'submit_btn'}>
                                    Deny
                                </button>
                            </div>
                        </div>
                    )
                }
            },
        }];

    const data = [
        ["Username", "User review", "Product", "Delete"],
        ["Username", "User review", "Product", "Delete"],
        ["Username", "User review", "Product", "Delete"],
        ["Username", "User review", "Product", "Delete"],
    ];

    return (
        <div className='page_responsive'>
            <h3>Review Approval</h3>
            <Container>
                <div>
                    <MuiDataTable
                        data={data}
                        columns={columns}
                    />
                </div>
            </Container>
        </div>
    )
}

export default ReviewApproval