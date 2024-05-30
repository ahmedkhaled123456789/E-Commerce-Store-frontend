import React from "react";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Home/Home.css";
import { Container, Row } from "reactstrap";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";

const ProductDetails = ({ products, addProducts }) => {
  const loading = useSelector((state) => state.products.loading);

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="ri-arrow-left-line"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : products?.map((product, index) => (
                <ProductCard
                  product={product}
                  addProducts={addProducts}
                  key={index}
                />
              ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default ProductDetails;
