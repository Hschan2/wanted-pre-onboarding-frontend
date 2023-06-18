import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const NavContainer = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #FFDAB9;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #333;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Nav = () => {
    return (
        <NavContainer>
            <Title>
                <NavLink to="/">프리온보딩</NavLink>
            </Title>
            <LinksContainer>
                <NavLink to="/signin">로그인</NavLink>
                <NavLink to="/signup">회원가입</NavLink>
            </LinksContainer>
        </NavContainer>
  )
}

export default Nav