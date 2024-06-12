import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EditCouponHook from '../../hook/admin/edit-coupon-hook';

const AdminEditCoupon = () => {
    const { id } = useParams();
    const [
        couponName, 
        couponDate, 
        couponValue, 
        onChangeName, 
        onChangeDate, 
        onChangeValue, 
        onSubmit
    ] = EditCouponHook(id);

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Edit Coupon Data</div>
                <Col sm="8">
                    <input
                        value={couponName}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Coupon Name"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Expiration Date"
                        onChange={onChangeDate}
                        value={couponDate}
                    />
                    <input
                        value={couponValue}
                        onChange={onChangeValue}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Discount Percentage"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button onClick={onSubmit} className="btn-save d-inline mt-2">
                        Save Changes
                    </button>
                </Col>
            </Row>
        </div>
    );
};

export default AdminEditCoupon;
