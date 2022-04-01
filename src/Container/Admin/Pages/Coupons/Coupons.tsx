import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import './Coupons.scss';

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

    const data = [
        ["FirstCoupon", "HappyScrub", "30$"],
        ["SecondCoupon", "HappyScrub", "30$"],
        ["ThirdCoupon", "HappyScrub", "30$"],
        ["FourthCoupon", "Trousers", "30$"],
    ];

    return (
        <div className='page_responsive'>
            <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit}/>
            <h3>Coupons</h3>
            <div className='btn_container'>
                <button onClick={() => navigate('/admin/create-coupon')}> Create Coupons </button>
            </div>
            <div className="coupon_container">
                <MuiDataTable
                    data={data}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default Coupons;