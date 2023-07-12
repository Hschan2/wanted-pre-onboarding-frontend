import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import SignComponent from '../components/SignComponent';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      navigate('/todo');
    }
  }, []);

  const onSubmit = async (email, password) => {
    await axios
      .post(`${AUTH_URL}/signup`, {
        email,
        password
      })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/signin");
      })
      .catch((err) => {
        alert(`Error: ${err.response.data.message}`);
      })
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