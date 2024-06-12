import React, { useState } from "react";
 import { Col } from "reactstrap"; 
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch,useSelector } from "react-redux";
import imgDefault from '../UI/images/products-1.png'
import imgDefault2 from '../UI/images/products--2.png'
import imgDefault3 from '../UI/images/products--3.png'
import imgDefault4 from '../UI/images/products--4.png'

import img_1  from '../UI/images/b-2.png';
import img_2  from '../UI/images/b-3.png'
import img_3  from '../UI/images/b-4.png'
import img_4  from '../UI/images/b-5.png'
import img_5  from '../UI/images/b-6.png'
import img_6  from '../UI/images/b-7.png'
import img_7  from '../UI/images/image-1.png'
import img_8  from '../UI/images/image-2.png'
import img_9  from '../UI/images/image-3.png'
import { deleteProduct } from "../../store/productReducer";
import { Button, Modal } from "react-bootstrap";

 const AllProducts = ({  product }) => {
   const dispatch = useDispatch();
 



    // Array of background photos
const photos = [imgDefault2, imgDefault3, img_1, img_2,imgDefault4,imgDefault, img_3, img_4, img_5, img_6, img_7, img_8, img_9];

// Select a random background from the photos array
const background = photos[Math.floor(Math.random() * photos.length)];
   
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

   

 const deleteProductAdmin= async (id) =>{
  await dispatch(deleteProduct(id))
  setShow(false);
  window.location.reload();
 }
  return ( 
    <>
    <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>Confirm Deletion  </div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'> Are you sure you want to delete this product?  </div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                         Back
                    </Button>
                    <Button className='font' variant="dark" onClick={() => deleteProductAdmin(product.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
   <Col lg="4" md='6'  sm='6'  className="mb-2">
        <div className="product_item ">
          <div className="product_img">   
            <div className="icons">
            <i onClick={handleShow} className="ri-delete-bin-line"></i>
                  <Link replace to={`/admin/editproduct/${product.id}`}><i className="ri-pencil-line"></i></Link>
                  
            </div>
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={background}
              alt=""
              onClick={(e) => console.log(e.target.src)}
            />
           
          </div>
          <div className="p-2 product_info">
            <h3 className="text-black">
              <Link to={`/product/${product.id}`}> {product.title}</Link>{" "}
            </h3>
            <div className="price">
              ${product.price} <span>${product.priceAfterDiscount}</span>
            </div>
           
          </div>
        </div>
      </Col>


    </>
  );
};

export default AllProducts;
