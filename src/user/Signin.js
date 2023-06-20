import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import { SignButton, SignInput, FlexComponent } from '../style/styled-components'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
  
    if (token) {
      Navigate('/todo');
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const validateForm = (email, password) => {
    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 8;

    setIsValid(isEmailValid && isPasswordValid);
  };

  const onSubmit = async () => {
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
    <FlexComponent>
      {!isValid && <div>이메일과 비밀번호를 제대로 입력해 주세요.</div>}
      <SignInput
        data-testid="email-input"
        value={email}
        onChange={handleEmailChange}
        placeholder='example@gmail.com'
      />
      <SignInput
        data-testid="password-input"
        value={password}
        onChange={handlePasswordChange}
        placeholder='8글자 이상 입력 필수'
      />
      <SignButton
        data-testid="signin-button"
        disabled={!isValid}
        onClick={onSubmit}
      >
        로그인
      </SignButton>
    </FlexComponent>
  )
}

export default Signin