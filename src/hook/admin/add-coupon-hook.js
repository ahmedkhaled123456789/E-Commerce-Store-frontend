import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { addCoupon, getCoupons } from '../../store/couponSlice';

const AddCouponHook = () => {
    const dispatch = useDispatch();
    const [coupnName, setCoupnName] = useState('');
    const [couponDate, setCouponDate] = useState('');
    const [couponValue, setCouponValue] = useState('');
    const [loading, setLoading] = useState(false);

    const onChangeName = (event) => setCoupnName(event.target.value);
    const onChangeDate = (event) => setCouponDate(event.target.value);
    const onChangeValue = (event) => setCouponValue(event.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (coupnName === "" || couponDate === "" || couponValue <= 0) {
            toast.error("Please complete all fields");
            return;
        }

        setLoading(true);
        const result = await dispatch(addCoupon({
            name: coupnName,
            expire: couponDate,
            discount: couponValue
        }));
        setLoading(false);

        if (result.type === addCoupon.fulfilled.type) {
            toast.success("Coupon added successfully");
            window.location.reload(false);
        } else {
            toast.error("Failed to add coupon");
        }
    };

    const res = useSelector(state => state.coupon.addCoupon);

    useEffect(() => {
        const fetchCoupons = async () => {
            await dispatch(getCoupons());
        };
        fetchCoupons();
    }, [dispatch]);

    const allCoupon = useSelector(state => state.coupon.allCoupon);

    let coupons = [];
    if (allCoupon  && allCoupon.length > 0) {
        coupons = allCoupon;
    }

    return [coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, coupons, loading];
};

export default AddCouponHook;
