import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import SignComponent from '../components/SignComponent';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      navigate('/todo');
    }
  }, []);

  const onSubmit = async (email, password) => {
    try {
      await axios.post(`${AUTH_URL}/signup`, {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response);
          alert("가입이 완료되었습니다.");
          navigate('/signin')
        })
        .catch(error => {
          console.log(error);
          alert("가입에 실패하였습니다.");
        })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignComponent
      onSubmit={onSubmit}
      buttonText="회원가입"
      placeholderEmail="example@gmail.com"
      placeholderPassword="비밀번호를 8글자 이상 입력해 주세요."
    />
  )
}

export default Signup