import React from "react";
import Categories from "./Categories";
import SilderBanner from "./SilderBanner";
import { Container, Row ,Col } from "reactstrap";

const Banner = () => {
  return (
    <>
      <Container>
        <Row className="banner_xs">
        <Col  lg='3' xs='12'>
          <Categories />
        </Col>

        <Col lg='9'  xs='12'>
          <SilderBanner />
        </Col>
        </Row>
      
      </Container>
    </>
  );
};

export default Banner;
