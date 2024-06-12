import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import { toast } from "react-toastify";
import { editCoupon, getCoupon } from '../../store/couponSlice';

const EditCouponHook = (id) => { 

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [coupnName, setCoupnName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)

    const oneCoupon = useSelector(state => state.coupon.oneCoupon)

    useEffect(() => {
        const get = async () => {
            setLoadingData(true)
            await dispatch(getCoupon(id))
            setLoadingData(false)
        }
        get(); 
    }, [])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }


    useEffect(() => {
        if (loadingData === false) {
            if (oneCoupon) {
                setCoupnName(oneCoupon.name)
                setCouponDate(formatDate(oneCoupon.expire))
                setCouponValue(oneCoupon.discount)
            }
        }
    }, [loadingData])



    const onChangeName = (event) => {
        event.persist();
        setCoupnName(event.target.value)
    }

    const onChangeDate = (event) => {
        event.persist();
        setCouponDate(event.target.value)

    }
    const onChangeValue = (event) => {
        event.persist();
        setCouponValue(event.target.value)
    }

    const onSubmit = async () => {
        if (coupnName === "" || couponDate === "" || couponValue <= 0) {
          toast.error("Please complete all fields");
          return
        }
        setLoading(true)
        const formData = new FormData();
        formData.append("name", coupnName);
        formData.append("expire", couponDate);
        formData.append("discount", couponValue);
         
        await dispatch(editCoupon({ id, data: formData }))
        setLoading(false)
    }

    const res = useSelector(state => state.coupon.editCoupon)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === 200) {
              toast.success("Coupon Edit successfully");
              setTimeout(() => {
                    navigate('/admin/addcoupon')
                }, 1000);
            } else {
              toast.error("Failed to edit coupon");
            }

        }
 
    }, [loading])



    return [coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit]
}


export default EditCouponHook