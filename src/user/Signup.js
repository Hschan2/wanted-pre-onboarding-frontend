import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignButton, SignInComponent, SignInput } from '../style/styled-components'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

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

  const handleSignup = async () => {
    try {
      const res = await axios.post('/auth/signup', {
        email,
        password
      })

      navigate('/signin');
    } catch (err) {
      console.log(err);
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
        type={password}
        value={password}
        onChange={handlePasswordChange}
        placeholder='8글자 이상 입력 필수'
      />
      <SignButton
        data-testid="signup-button"
        disabled={!isValid}
        onClick={handleSignup}
      >
        회원가입
      </SignButton>
    </SignInComponent>
  )
}

export default Signup