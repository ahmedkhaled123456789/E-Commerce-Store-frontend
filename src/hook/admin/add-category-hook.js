// AddCategoryHook.js
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import avatar from '../../images/avatar.png';
import { addCategory } from '../../store/categoriesSlice';

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isPress, setIsPress] = useState(false);

    const res = useSelector(state => state.category.category);

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null) {
            toast.error("Please complete all fields");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        setLoading(true);
        setIsPress(true);
        try {
            await dispatch(addCategory(formData));
            toast.success("Category added successfully");
        } catch (error) {
            toast.error("Failed to add category");
        } finally {
            setLoading(false);
            setIsPress(false);
            setImg(avatar);
            setName('');
            setSelectedFile(null);
        }
    };

    useEffect(() => {
        if (res?.status === 201) {
            setLoading(false);
        }
    }, [res]);

    return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName];
};

export default AddCategoryHook;
