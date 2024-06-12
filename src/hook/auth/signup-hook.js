/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { signupUser } from '../../store/auth/authSlice';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';

const signupHook = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || passwordConfirm === '') {
      toast.error("Please complete your data");
      return;
    }
    if ( passwordConfirm !==  password ) {
      toast.error("Password Confirmation incorrect");
      return;
    }

    setIsPress(true);
    setLoading(true);

    await dispatch(signupUser({ email, password, name, passwordConfirm }));

    setLoading(false);
    setIsPress(false);
  };

  const res = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!loading && res) {
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

         
        if (res.data?.message === "Password Confirmation incorrect") {
          toast.error("Password Confirmation incorrect");
        }
      }
      setLoading(true);
    }
  }, [loading, res]);

  return {
    email,
    password,
    name,
    passwordConfirm,
    loading,
    isPress,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    onSubmit,
  };
};

export default signupHook;
