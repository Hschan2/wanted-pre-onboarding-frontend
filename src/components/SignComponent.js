import React, { useState } from 'react'
import { FlexComponent, SignButton, SignInput } from '../style/styled-components';

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
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const validateForm = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;

    setIsValid(isEmailValid && isPasswordValid);
  };

  const handleFormSubmit = () => {
    if (isValid) {
      onSubmit(email, password);
    } else {
      setErrorMessage("이메일과 비밀번호를 제대로 입력해 주세요.");
    }
  };
  
  return (
    <FlexComponent>
      {errorMessage && <div>{errorMessage}</div>}
      <SignInput
        data-testid="email-input"
        value={email}
        onChange={handleEmailChange}
        placeholder={placeholderEmail}
      />
      <SignInput
        data-testid="password-input"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder={placeholderPassword}
      />
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