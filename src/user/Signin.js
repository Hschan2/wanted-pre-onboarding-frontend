import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignButton, SignInComponent, SignInput } from '../style/styled-components'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    try {
      const res = await axios.post('/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.access_token);

      navigate('/todo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInComponent>
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
        onClick={handleLogin}
      >
        로그인
      </SignButton>
    </SignInComponent>
  )
}

export default Signin