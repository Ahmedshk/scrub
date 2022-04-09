import React from 'react'
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import { Container } from 'react-bootstrap'
import {usersData} from "../../../../hooks/admin";

const AllUsers = () => {
    const columns = ['Role',"Name","Contact No.","email"]
    return (
        <div className='page_responsive'>
            <h3>All Users</h3>
            <Container>
                <MuiDataTable title="Total Orders" data={usersData} columns={columns} />
            </Container>
        </div>
    )
}

export default AllUsers