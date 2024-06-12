import React, { useRef } from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import "./style.css";
import AddCouponHook from "../../hook/admin/add-coupon-hook";
import AdminCoupnCard from "./AdminCoupnCard";

const AddCoupon = () => {
  const dateRef = useRef();
  const [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
    loading,
  ] = AddCouponHook();

  return (
    <div className="container mt-4">
      <Row className="justify-content-start">
        <Col xs={12} className="pb-4">
          <h4 className="admin-content-text">Add New Coupon</h4>
        </Col>
        <Col xs={12} md={8}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mt-3">
              <Form.Label>Coupon Name</Form.Label>
              <Form.Control
                value={coupnName}
                onChange={onChangeName}
                type="text"
                className="input-form"
                placeholder="Coupon Name"
                disabled={loading}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                onChange={onChangeDate}
                value={couponDate}
                ref={dateRef}
                type="text"
                className="input-form"
                placeholder="Expiration Date"
                onFocus={() => (dateRef.current.type = "date")}
                onBlur={() => (dateRef.current.type = "text")}
                disabled={loading}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Discount Percentage</Form.Label>
              <Form.Control
                value={couponValue}
                onChange={onChangeValue}
                type="number"
                className="input-form"
                placeholder="Discount Percentage"
                disabled={loading}
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
              <Button type="submit" className="btn-save" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Save"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="">
          {coupons ? (
            coupons.map((item, index) => {
              return <AdminCoupnCard key={index} coupon={item} />;
            })
          ) : (
            <h6>لا يوجد كوبونات حتى الان</h6>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddCoupon;
