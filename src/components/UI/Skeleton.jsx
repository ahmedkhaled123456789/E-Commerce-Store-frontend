import React, { useState } from "react";
 import { Col } from "reactstrap";
 import { motion } from "framer-motion";
 

 

 const Skeleton = () => {
 
  return ( 
    <>
<Col lg="3" md='6'  sm='6'  className=" mb-2">
<div className="product_item ">
  <div className="product_img">

   
    <div className="photo_skt">

    </div>
    
  </div>
  <div className="p-2 product_info">
    <h3 className="text-black head_Skeleton  ">

     </h3>
    <div className="price_Skeleton">

     </div>
    <div className="rating">
      <div className="form_Skeleton d-flex align-items-center gap-1 rating_group">
        <motion.span whileTap={{ scale: 1.2 }}>
          <i class="ri-star-s-fill "></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
        </motion.span>

       </div>
    </div>
  </div>
</div>
</Col >
     
    </>
  );
};

export default Skeleton;
