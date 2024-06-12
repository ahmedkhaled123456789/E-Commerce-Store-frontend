import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import img from '../../images/avatar.png';
import './style.css'
const AddBrands = () => {
  const [selectedImage, setSelectedImage] = useState(img);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="container mt-4">
      <Row className="justify-content-start">
        <Col xs={12} className="pb-4">
          <h4 className="admin-content-text">Add New Brand</h4>
        </Col>
        <Col sm={12} md={8}>
          <Form>
            <Form.Group className="pb-2">
              <Form.Label>Brand Photo</Form.Label>
              <div className="d-flex align-items-center">
                <label htmlFor="upload-photo">
                  <img
                    src={selectedImage}
                    alt="Brand"
                    height="100px"
                    width="120px"
                    style={{ cursor: "pointer", border: "none" }}
                    className="img-thumbnail"
                  />
                </label>
                <Form.Control
                  type="file"
                  id="upload-photo"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label >Brand Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand Name"
                className="input-form"
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
              <Button type="submit" className="btn-save">Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddBrands;
