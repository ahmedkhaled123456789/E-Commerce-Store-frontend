// AddCategories.js
import React, { useState } from 'react';
import { Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import './style.css';
import AddCategoryHook from '../../hook/admin/add-category-hook';

const AddCategories = () => {
    const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] = AddCategoryHook();
 
     

    return (
        <div className="container mt-4">
            <Row className="justify-content-start">
                <Col xs={12} className="pb-4">
                    <h4 className="admin-content-text">Add New Category</h4>
                </Col>
                <Col xs={12} md={8}>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="pb-2">
                            <Form.Label>Category Photo</Form.Label>
                            <div className="d-flex align-items-center">
                                <label htmlFor="upload-photo">
                                    <img
                                        src={img}
                                        alt="Category"
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
                                    onChange={onImageChange}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Category Name"
                                className="input-form"
                                onChange={onChangeName}
                                value={name}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-end mt-3">
                            <Button   type="submit" className="btn-save">Save</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            {isPress && (
                loading ? <Spinner animation="border" variant="primary" /> : <h4>Operation Completed</h4>
            )}
        </div>
    );
};

export default AddCategories;
