import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import {CouponData} from "../../../../hooks/admin";
import './Coupons.scss';
import {Button} from 'react-bootstrap'

const Coupons = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const editCoupons = () => {
        navigate('/admin/edit-coupon/123')
    }

    const columns = ["Coupon Name", "Coupon Code", "Price",{
        name: "Actions",
        options: {
            customBodyRender: (value: any, tableMeta: any) => {
                return (
                    <React.Fragment>
                        <button className={'btn mx-2'} onClick={deleteCouponHandler}>
                            Delete
                        </button>
                        <button className={'btn'} onClick={editCoupons}>
                            Edit
                        </button>
                    </React.Fragment>
                )
            }
        },
    }]

    const deleteCouponHandler = () => {
        setShow(!show)
    }
    const onDeleteSubmit = () => {
        setShow(!show)
    }


    return (
        <div className='page_responsive'>
            <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit}/>
            <h3>Coupons</h3>
            <div>
                <Button className= 'all_btns' onClick={() => navigate('/admin/create-coupon')}> Create Coupons </Button>
            </div>
            <div className="coupon_container">
                <MuiDataTable
                    data={CouponData}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default Coupons;