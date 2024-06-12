import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { getCategories, getCategory } from '../../store/categoriesSlice';
import { addProducts } from '../../store/productReducer';

const AdminAddProductsHook = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

 
    const [options, setOptions] = useState([]);
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

    const onSelectCategory = async (e) => {
        const value = e.target.value;
         if (value !== '0') { 
            await dispatch(getCategory(value));
        }
        setCatID(value);
 
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!CatID || !prodName || !prodDescription || Object.keys(images).length === 0 || !priceBefore || !priceAfter || !qty) {
            toast.error("Please complete all fields");
            return;
        }

        const imgCover = dataURLtoFile(images[0], `${Math.random()}.png`);
        const itemImages = Object.keys(images).map((key) => dataURLtoFile(images[key], `${Math.random()}.png`));

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAfter);
        formData.append("category", CatID);
        formData.append("imageCover", imgCover);
        itemImages.forEach((item) => formData.append("images", item));
        colors.forEach((color) => formData.append("availableColors", color));

        setLoading(true);
        await dispatch(addProducts(formData));
        setLoading(false);
    };

    const product = useSelector(state => state.products.products);

    useEffect(() => {
        if (!loading && product) {
            setProdName('');
            setProdDescription('');
            setPriceBefore('');
            setPriceAfter('');
            setQty('');
            setImages({});
            setColors([]);

            if (product.status === 201) {
                toast.success("Product added successfully");
            } else {
                // toast.error("Failed to add Product");
            }
        }
    }, [loading, product]);

    return [
        onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName,
        showColor, category, priceAfter, images, setImages, options, handleChangeComplete, removeColor, onSelectCategory,
        handleSubmit, colors, priceBefore, qty, prodDescription, prodName, loading
    ];
};

export default AdminAddProductsHook;
