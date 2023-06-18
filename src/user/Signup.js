import styled from '@emotion/styled'
import React from 'react'

const SignInComponent = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignInput = styled.input`
  width: 200px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`

const SignButton = styled.button`
  width: 200px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

const Signup = () => {
  return (
    <SignInComponent>
      <SignInput data-testid="email-input" placeholder='Write a E-mail' />
      <SignInput data-testid="password-input" placeholder='Write a Password' />
      <SignButton data-testid="signup-button">회원가입</SignButton>
    </SignInComponent>
  )
}

export default Signup