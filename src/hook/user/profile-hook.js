import React, { useState, useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import { updateUserPassword, updateUserProfileData } from '../../store/auth/authSlice';
import { toast } from 'react-toastify';

const ProfileHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    let user = []
    if (localStorage.getItem("user") !== null)
        user = JSON.parse(localStorage.getItem("user"))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
 
    const [loading, setLoading] = useState(true)


    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        event.persist();
        setEmail(event.target.value)
    }
    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)
    }

    const handelSubmit = async (e) => {
      e.preventDefault();

        let body
        if (user.email === email) {
            body = {
                name,
                
            }
        } else {
            body = {
                name,
                email,
               
            }
        }
        setLoading(true)
        await dispatch(updateUserProfileData(body))
        setLoading(false)
        setShow(false);
        //   window.location.reload(false);
    }

    const res = useSelector(state => state.auth.userProfile)
    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res && res.status === 200) {
              toast.success("  updated successfully");
  
                localStorage.setItem("user", JSON.stringify(res.data.data.user))
                setTimeout(() => {
                    window.location.reload(false);
                }, 1500);

            } else {
              toast.error("Failed to update product");
            }
        }
    }, [loading])



    ///change user password

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loadingPass, setLoadingPass] = useState(true)


    const onChangeOldPass = (event) => {
        event.persist();
        setOldPassword(event.target.value)
    }

    const onChangeNewPass = (event) => {
        event.persist();
        setNewPassword(event.target.value)
    }
    const onChangeConfirmPass = (event) => {
        event.persist();
        setConfirmNewPassword(event.target.value)
    }

    const changePassword = async (e) => {
      e.preventDefault();

        if (confirmNewPassword != newPassword) {
          toast.error("Password Confirmation incorrect");
            return
        }
        setLoadingPass(true)
        await dispatch(updateUserPassword({
            currentPassword: oldPassword,
            password: newPassword,
            passwordConfirm: confirmNewPassword
        }))
        setLoadingPass(false)
    }

    const resPass = useSelector(state => state.auth.userChangePassword)
    useEffect(() => {
        if (loadingPass === false) {
            console.log(resPass)
            if (resPass && resPass.status === 200) {
              toast.success("  updated successfully");
                setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                }, 1500); 

            } else {
              toast.error("Failed to update product");
            }
        }
    }, [loadingPass])

    return [user, show, handleClose, handleShow, handelSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, changePassword, oldPassword, newPassword, confirmNewPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass]
}

export default ProfileHook