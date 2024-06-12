import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { getCategories, getCategory } from '../../store/categoriesSlice';
import { getProduct, updateProduct } from '../../store/productReducer';

const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
};

const AdminEditProductsHook = (id) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category);
    const item = useSelector(state => state.products.product);

    useEffect(() => {
        const run = async () => {
            await dispatch(getProduct(id));
            await dispatch(getCategories());
        };
        run();
    }, [dispatch, id]);

    const [images, setImages] = useState({});
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('');
    const [priceAfter, setPriceAfter] = useState('');
    const [qty, setQty] = useState('');
    const [CatID, setCatID] = useState('');
    const [loading, setLoading] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        if (item) {
            setImages(item.images || {});
            setProdName(item.title || '');
            setProdDescription(item.description || '');
            setPriceBefore(item.price || '');
            setQty(item.quantity || '');
            setCatID(item.category || '');
            setColors(item.availableColors || []);
            setPriceAfter(item.priceAfterDiscount || '');
        }
    }, [item]);

    const onChangeProdName = (event) => setProdName(event.target.value);
    const onChangeDesName = (event) => setProdDescription(event.target.value);
    const onChangePriceBefore = (event) => setPriceBefore(event.target.value);
    const onChangePriceAfter = (event) => setPriceAfter(event.target.value);
    const onChangeQty = (event) => setQty(event.target.value);
    const onChangeColor = () => setShowColor(!showColor);

    const handleChangeComplete = (color) => {
        setColors([...colors, color.hex]);
        setShowColor(false);
    };

    const removeColor = (color) => {
        setColors(colors.filter((e) => e !== color));
    };

    const onSelectCategory = (e) => {
        const value = e.target.value;
        setCatID(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!CatID || !prodName || !prodDescription || Object.keys(images).length === 0 || !priceBefore || !priceAfter || !qty) {
            toast.error("Please complete all fields");
            return;
        }

        const imgCover = images[0] ? dataURLtoFile(images[0], `${Math.random()}.png`) : null;
        const itemImages = Object.keys(images).map((key) => dataURLtoFile(images[key], `${Math.random()}.png`));

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAfter);
        formData.append("category", CatID);
        if (imgCover) {
            formData.append("imageCover", imgCover);
        }
        itemImages.forEach((item) => formData.append("images", item));
        colors.forEach((color) => formData.append("availableColors", color));

        setLoading(true);
        const result = await dispatch(updateProduct({ id, data: formData }));
        setLoading(false);

        if (result.error) {
            toast.error("Failed to update product");
        } else {
            toast.success("Product updated successfully");
        }
    };

    return [
        onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName,
        showColor, category, priceAfter, images, setImages, handleChangeComplete, removeColor, onSelectCategory,
        handleSubmit, colors, priceBefore, qty, prodDescription, prodName, loading
    ];
};

export default AdminEditProductsHook;
