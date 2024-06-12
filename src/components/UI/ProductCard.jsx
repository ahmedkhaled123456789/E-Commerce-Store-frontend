
import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addProductFav } from "../../store/favProductSlice";
import { addProducts } from '../../store/productSlice';
import imgDefault from '../UI/images/products-1.png';
import imgDefault2 from '../UI/images/products--2.png';
import imgDefault3 from '../UI/images/products--3.png';
import imgDefault4 from '../UI/images/products--4.png';

import img_1 from '../UI/images/b-2.png';
import img_2 from '../UI/images/b-3.png';
import img_3 from '../UI/images/b-4.png';
import img_4 from '../UI/images/b-5.png';
import img_5 from '../UI/images/b-6.png';
import img_6 from '../UI/images/b-7.png';
import img_7 from '../UI/images/image-1.png';
import img_8 from '../UI/images/image-2.png';
import img_9 from '../UI/images/image-3.png';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favProduct = useSelector((state) => state.favProduct.items);
  const [isFavorite, setIsFavorite] = useState(false);

  const [load, setLoad] = useState(false);
  // Array of background photos
  const photos = [imgDefault2, imgDefault3, img_1, img_2, imgDefault4, imgDefault, img_3, img_4, img_5, img_6, img_7, img_8, img_9];

  // Select a random background from the photos array
  const background = photos[Math.floor(Math.random() * photos.length)];
  
  useEffect(() => {
    // Check if the product is already in favorites
    const existsInFav = favProduct.some((fav) => fav.id === product.id);
    setIsFavorite(existsInFav);
  }, [favProduct, product.id]);

  const handleToggle = () => {
    setLoad(!load);
    dispatch(
      addProductFav({
        id: product.id,
        image: background,
        title: product.title,
        newprice: product.price,
        beforePrice: product.priceAfterDiscount,
      })
    );
  };

  const location = useLocation();

  // Calculate the number of filled and empty stars based on product.ratingsAverage
  const renderStars = () => {
    const ratingsAverage = product.ratingsAverage || 0; // Default to 0 if ratingsAverage is not defined
    const filledStars = Math.max(0, Math.min(5, Math.floor(ratingsAverage))); // Ensure filledStars is between 0 and 5
    const emptyStars = Math.max(0, 5 - filledStars); // Ensure emptyStars is between 0 and 5
    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <i key={index} className="ri-star-s-fill"></i>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={index} className="ri-star-s-line"></i>
        ))}
      </>
    );
  };

  return (
    <Col lg="3" md="6" sm="6" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          {product.offer ? <div className="descount">{product.offer}</div> : ""}
          <div className="icons">
            {location.pathname.startsWith("/wishlist") ? (
              <Link replace to={`/product/${product.id}`}>
                <i className="ri-eye-line"></i>
              </Link>
            ) : (
              <>
                <i
                  onClick={handleToggle}
                  className={`ri-heart-fill love ${isFavorite ? "active" : ""}`}
                ></i>
                <Link replace to={`/product/${product.id}`}>
                  <i className="ri-eye-line"></i>
                </Link>
              </>
            )}
          </div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={background}
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
            <Link to={`/product/${product.id}`}> {product.title}</Link>{" "}
          </h3>
          <div className="price">
            ${product.priceAfterDiscount} <span>${product.price}</span>
          </div>
          <div className="rating">
            <div className="form_group d-flex align-items-center gap-1 rating_group">
              <motion.span whileTap={{ scale: 1.2 }}>
                {renderStars()}
              </motion.span>
              <span className="num_rating">({product.ratingsAverage || 0})</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
