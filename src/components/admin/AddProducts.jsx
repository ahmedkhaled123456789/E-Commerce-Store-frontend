import React from 'react';
import { Row, Col, Spinner, Button } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import AdminAddProductsHook from '../../hook/admin/add-products-hook';
import add from '../../images/add.png';
import './style.css';

const AdminAddProducts = () => {
    const [
        onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName,
        showColor, category, priceAfter, images, setImages, options, handleChangeComplete, removeColor, onSelectCategory,
        handleSubmit, colors, priceBefore, qty, prodDescription, prodName, loading
    ] = AdminAddProductsHook();

 
    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Add New Product</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product Images</div>

                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />

                    <input
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                        disabled={loading}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"
                        value={prodDescription}
                        onChange={onChangeDesName}
                        disabled={loading}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price Before Discount"
                        value={priceBefore}
                        onChange={onChangePriceBefore}
                        disabled={loading}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price After Discount"
                        value={priceAfter}
                        onChange={onChangePriceAfter}
                        disabled={loading}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Available Quantity"
                        value={qty}
                        onChange={onChangeQty}
                        disabled={loading}
                    />
                    <select
                        name="cat"
                        onChange={onSelectCategory}
                        className="select input-form-area mt-3 px-2"
                        disabled={loading}>
                        <option value="0">Main Category</option>
                        {Array.isArray(category)  ? (
                            category.map((item, index) => (
                                <option key={index} value={item._id}>{item.name}</option>
                            ))
                        ) : (
                            <option disabled>Loading categories...</option>
                        )}
                    </select>

                    <div className="text-form mt-3">Available Colors</div>
                    <div className="mt-1 d-flex">
                        {colors.map((color, index) => (
                            <div key={index}
                                 onClick={() => removeColor(color)}
                                 className="color ms-2 border mt-1"
                                 style={{ backgroundColor: color }}></div>
                        ))}
                        <img onClick={onChangeColor} src={add} className='picker_img' alt="Add Color" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {showColor && <CompactPicker onChangeComplete={handleChangeComplete} />}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <Button onClick={handleSubmit} className="btn-save d-inline mt-2" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Save Changes'}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default AdminAddProducts;
