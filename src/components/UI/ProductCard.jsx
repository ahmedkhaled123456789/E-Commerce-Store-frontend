import React, { useState } from "react";
 import { Col } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addProductFav } from "../../store/favProductSlice";
import {addProducts} from '../../store/productSlice'
import imgDefault from '../UI/images/products-1.png'
 const ProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);
 const handleToggle = ()=>{
setLoading(!loading)
dispatch(
  addProductFav({
    id: product.id,
    image:imgDefault,
    title: product.title,
    newprice: product.price,
    beforePrice: product.priceAfterDiscount,
  })
)
 
 }
  const location = useLocation();
  return ( 
    <>
      <Col lg="3" md='6'  sm='6'  className="mb-2">
        <div className="product_item ">
          <div className="product_img">
{
  product.offer?<div className="descount">{product.offer}</div>:""
}
            
            <div className="icons">
              {location.pathname.startsWith("/wishlist") ? (
                  <Link replace to={`/product/${product.id}`}><i className="ri-eye-line"></i></Link>
                ) : (
                <>
                  <i
                    onClick={() =>
                      handleToggle()
                     
                    }
                    className={
                      loading
                        ? "ri-heart-fill love active "
                        : "ri-heart-fill love "
                    }
                  ></i>
                  <Link replace to={`/product/${product.id}`}><i className="ri-eye-line"></i></Link>
                  
                </>
              )}
            </div>
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={imgDefault}
              alt=""
              onClick={(e) => console.log(e.target.src)}
            />
            <div
              className="add_btn"
              onClick={() =>
                dispatch(
                  addProducts({
                    id: product.id,
                    image: imgDefault,
                    title: product.title,
                    description: product.description,
                    newprice: product.price,
                    beforePrice: product.priceAfterDiscount,
                    rating: product.ratingsAverage,
                  })
                )
              }
            >
              Add to Cart
            </div>
          </div>
          <div className="p-2 product_info">
            <h3 className="text-black">
              <Link to=""> {product.title}</Link>{" "}
            </h3>
            <div className="price">
              ${product.price} <span>${product.priceAfterDiscount}</span>
            </div>
            <div className="rating">
              <div className="form_group d-flex align-items-center gap-1 rating_group">
                <motion.span whileTap={{ scale: 1.2 }}>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                </motion.span>

                <span className="num_rating">({product.ratingsAverage})</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
