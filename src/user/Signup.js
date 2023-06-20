import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../api/api';
import { SignButton, SignInput, FlexComponent } from '../style/styled-components'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      navigate('/todo');
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
        type={password}
        value={password}
        onChange={handlePasswordChange}
        placeholder='8글자 이상 입력 필수'
      />
      <SignButton
        data-testid="signup-button"
        disabled={!isValid}
        onClick={onSubmit}
      >
        회원가입
      </SignButton>
    </FlexComponent>
  )
}

export default Signup