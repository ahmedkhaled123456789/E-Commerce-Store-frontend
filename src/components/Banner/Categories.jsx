import React, { useState } from 'react'
import "./Banner.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsSearch } from '../../store/productReducer';

const Categories = () => {
  const dispatch = useDispatch();
 
  const products = useSelector((state) => state.category.category)
  const selecthandle =  (value) =>{
     setTimeout(() => {
      const get =async () =>{
        await dispatch(getAllProductsSearch(value))

      }
      get();
       }, 1000)
  
   }

   const data=[
    {
      cateName:"Woman’s Fashion",
       icon: "ri-arrow-right-s-line",
    },
    {
      cateName:"Men’s Fashion",
      icon: "ri-arrow-right-s-line",
    },{
      cateName:"Electronics",
     },{
      cateName:"Home & Lifestyle",
     },{
      cateName:"Medicine",
     },{
      cateName:"Sports & Outdoor",
     },{
      cateName:"Baby’s & Toys",
     },{
      cateName:"Groceries & Pets",
     },{
      cateName:"Health & Beauty",
     }
  ]
  return (
    <> 
      <div className='category'>
        {products ? (
          products.slice(0,9).map((value, index) => {
            return (
              <div className='box' key={index}>
  
                
                <Link to='/shop'><span
                onClick={() =>selecthandle(value.name.split(" ")[0])}
                >{value.name}</span></Link>
                {/* <i className={value.icon}></i> */}
              </div>
            )
          })
        ):(
          data.map((value, index) => {
            return (
              <div className='box' key={index}>
  
                
                <Link to='/shop'><span>{value.cateName}</span></Link>
                {/* <i className={value.icon}></i> */}
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Categories;