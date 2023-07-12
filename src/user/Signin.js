import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import SignComponent from '../components/SignComponent';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      Navigate('/todo');
    }
  }, []);

  const onSubmit = async (email, password) => {
    await axios
      .post(`${AUTH_URL}/signin`, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/todo");
      })
      .catch(err => {
        alert(`Error: ${err.response.data.message}`);
      })
  }

  return (
    <SignComponent
      onSubmit={onSubmit}
      buttonText="로그인"
      placeholderEmail="example@gmail.com"
      placeholderPassword="비밀번호를 8글자 이상 입력해 주세요."
      testid="signin-button"
    />
  )
}

export default SignIn