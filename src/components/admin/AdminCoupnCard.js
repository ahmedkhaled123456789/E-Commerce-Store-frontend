import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import deleteIcon from "../../images/delete.png";
import editIcon from "../../images/edit.png";
import { Link } from "react-router-dom";
import CouponCardHook from "../../hook/admin/coupon-card-hook";

const AdminCouponCard = ({ coupon }) => {
  const [formatDate, dateString, show, handleClose, handleShow, handleDelete] =
    CouponCardHook(coupon);

  return (
    <div className="coupon-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this coupon?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="d-flex justify-content-between align-items-center">
        <Col xs="6">
          <div className="p-2">Coupon Name: {coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/admin/editcoupon/${coupon._id}`}
              className="d-flex align-items-center text-decoration-none"
            >
              <img
                alt="Edit"
                className="me-1"
                src={editIcon}
                height="17px"
                width="15px"
              />
              <p className="item-edit">Edit</p>
            </Link>
            <div
              onClick={handleShow}
              className="d-flex align-items-center ms-3 cursor-pointer"
            >
              <img
                alt="Delete"
                className="me-1"
                src={deleteIcon}
                height="17px"
                width="15px"
              />
              <p className="item-delete">Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="coupon-expiry">
            Expiration Date: {formatDate(dateString)}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex align-items-center">
          <div className="coupon-discount-label">Discount Percentage:</div>
          <div className="coupon-discount-value mx-2">{coupon.discount} %</div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
