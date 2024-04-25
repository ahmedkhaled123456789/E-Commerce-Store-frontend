import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/About.css";
import personImg from "../components/UI/images/person_1.png";
import personImg_2 from "../components/UI/images/person_2.png";
import personImg_3 from "../components/UI/images/person_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
 import Breadcrumb from 'react-bootstrap/Breadcrumb';
 import aboutImg from "../components/UI/images/about_2.jfif";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  
  <section>
      <Container>
      <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>About</Breadcrumb.Item>
    </Breadcrumb>
       
       <Row className='mt-5'>

        <Col lg='6' className="about_box">
          <h1 className="about_title">
          Our Story
          </h1>
          <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
<p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </Col>
        <Col lg='6' className="about_img">

          <img src={aboutImg} alt=''/>
        </Col>

       </Row>
       <Row className="delivery">
        <Col lg="3" md='6' sm='6' xs='12'  className="text-center border_box mt-5">
          <div className="icons">
          <i class="ri-home-8-line"></i>  
          </div>
          <h2>10.5k </h2>
          <p>Sallers active our site</p>
        </Col>
        <Col lg="3" md='6' sm='6' xs='12' className="text-center border_box mt-5">
          
          <div className="icons">
          <i class="ri-discount-percent-line"></i>          </div>
          <h2>33k </h2>
          <p>Mopnthly Produduct Sale</p>
           
          
        </Col>
        <Col lg="3" md='6' sm='6' xs='12' className="text-center border_box mt-5">
          <div className="icons">
          <i class="ri-shopping-bag-3-line"></i>          </div>
          <h2>20.5k </h2>
          <p>Customer active in our site</p>
        </Col>
        <Col lg="3" md='6' sm='6' xs='12'   className="text-center border_box mt-5 laster">
          <div className="icons">
          <i class="ri-money-dollar-circle-line"></i>          </div>
          <h2>25.5k </h2>
          <p>Anual gross sale in our site</p>
        </Col>
      </Row>
      

       <>
       

               <Row className="mt-5">
     
     <Col lg="4" md='6' sm='6' xs='12' className="mt-5">
    <div className="product_item ">
      <div className="product_img">
          
        <img   src={personImg} alt="" />

      </div>
      <div className="product_info">
        <h3 className="text-black text-bold">
           Tom Cruise 
        </h3>
         <p>Founder & Chairman</p>
         <div className="icons_media">
         <i class="ri-twitter-line"></i>
         <i class="ri-instagram-line"></i>
         <i class="ri-linkedin-line"></i>
         </div>
      </div>
    </div>
  </Col>
  <Col lg="4" md='6' sm='6' xs='12' className="mt-5">
    <div className="product_item ">
      <div className="product_img"> 
          
        <img   src={personImg_2} alt="" />

      </div>
      <div className="product_info">
        <h3 className="text-black text-bold">
           Tom Cruise 
        </h3>
         <p>Founder & Chairman</p>
         <div className="icons_media">
         <i class="ri-twitter-line"></i>
         <i class="ri-instagram-line"></i>
         <i class="ri-linkedin-line"></i>
         </div>
      </div>
    </div>
  </Col>
  <Col lg="4"md='6' sm='6' xs='12' className="mt-5">
    <div className="product_item ">
      <div className="product_img">
          
        <img   src={personImg_3} alt="" />

      </div>
      <div className="product_info">
        <h3 className="text-black text-bold">
           Tom Cruise 
        </h3>
         <p>Founder & Chairman</p>
         <div className="icons_media">
         <i class="ri-twitter-line"></i>
         <i class="ri-instagram-line"></i>
         <i class="ri-linkedin-line"></i>
         </div>
      </div>
    </div>
  </Col>
     </Row>
      
            </>
       <Row className="delivery top_delivery mt-5">
        <Col lg="4" className="text-center">
          <div className="icons">
          <i class="ri-truck-line"></i>
          </div>
          <h2>FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </Col>
        <Col lg="4" className="text-center mt-5">
          <div className="icons">
          <i class="ri-customer-service-line"></i>          </div>
          <h2>24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </Col>
        <Col lg="4" className="text-center mt-5">
          <div className="icons">
          <i class="ri-git-repository-private-line "></i>          </div>
          <h2>MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </Col>
      </Row>
      </Container>
    </section>
  

    
  );
};

export default About;
