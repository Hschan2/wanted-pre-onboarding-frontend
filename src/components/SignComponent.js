import React, { useState } from 'react'
import { ErrorMessage, FlexComponent, SignButton, SignInput } from '../style/styled-components';

const SignComponent = ({
  onSubmit,
  buttonText,
  placeholderEmail,
  placeholderPassword,
  testid
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailCheckRegex = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    const emailCheck = emailCheckRegex(inputEmail);
    
    setEmail(inputEmail);

    if (inputEmail && emailCheck) {
      setEmailError('');
      validateForm(inputEmail, password);
    } else {
      setEmailError("이메일을 다시 입력해 주세요.");
      setIsValid(false);
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;

    setPassword(inputPassword);

    if (inputPassword.length >= 8) {
      setPasswordError('');
      validateForm(email, inputPassword);
    } else {
      setPasswordError("비밀번호를 8글자 이상 입력해 주세요.");
      setIsValid(false);
    }
  };

  const validateForm = (email, password) => {
    if (email && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleFormSubmit = () => {
    if (isValid) {
      onSubmit(email, password);
    }
  };
  
  return (
    <FlexComponent>
      <SignInput
        data-testid="email-input"
        value={email}
        onChange={handleEmailChange}
        placeholder={placeholderEmail}
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      <SignInput
        data-testid="password-input"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder={placeholderPassword}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      <SignButton
        data-testid={testid}
        disabled={!isValid}
        onClick={handleFormSubmit}
      >
        {buttonText}
      </SignButton>
    </FlexComponent>
  )
}

export default SignComponent