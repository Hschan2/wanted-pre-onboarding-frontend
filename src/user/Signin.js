import axios from 'axios';
import React, { useEffect } from 'react'
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

  const onSubmit = (email, password) => {
    fetch(`${AUTH_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('access_token', result.access_token);
          navigate('/todo');
        } else {
          alert('이메일과 비밀번호가 맞지 않습니다.');
        }
      })
      .catch(error => {
        console.error(error);
      });
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