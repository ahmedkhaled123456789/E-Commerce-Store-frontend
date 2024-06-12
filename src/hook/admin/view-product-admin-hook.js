import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
 import { getAllProductsPage } from './../../redux/actions/productsAction';
import { getProducts } from '../../store/productReducer';

const ViewProductAdminHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(8))
    }, [])
 

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 8))
    }
    let items = []; let pagination = [];
    const allProducts = useSelector((state) => state.products.products)
    try {

        if (allProducts.data) 
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    return [items, pagination, onPress]

}

export default ViewProductAdminHook