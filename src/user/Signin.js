import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import SignComponent from '../components/SignComponent';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
  
    if (token) {
      Navigate('/todo');
    }
  }, []);

  const onSubmit = async (email, password) => {
    try {
      await axios.post(`${AUTH_URL}/signin`, {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.access_token) {
            localStorage.setItem('token', response.data.access_token);
            alert("로그인이 완료되었습니다.");
            navigate('/todo');
          } else {
            alert("이메일과 비밀번호를 다시 입력해 주세요.");
          }
          
        })
        .catch(error => {
          console.log(error);
          alert("로그인에 실패하였습니다.");
        })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignComponent
      onSubmit={onSubmit}
      buttonText="로그인"
      placeholderEmail="example@gmail.com"
      placeholderPassword="비밀번호를 8글자 이상 입력해 주세요."
    />
  )
}

export default SignIn