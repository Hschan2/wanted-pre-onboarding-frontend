import axios from 'axios';
import React, { useEffect } from 'react'
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

  const onSubmit = (email, password) => {
    fetch(`${AUTH_URL}/signup`, {
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
        console.log(result);
        alert("가입이 완료되었습니다.");
        navigate("/signin");
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <SignComponent
      onSubmit={onSubmit}
      buttonText="회원가입"
      placeholderEmail="example@gmail.com"
      placeholderPassword="비밀번호를 8글자 이상 입력해 주세요."
      testid="signup-button"
    />
  )
}

export default Signup