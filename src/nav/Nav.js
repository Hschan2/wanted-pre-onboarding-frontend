import React, { useEffect } from 'react'
import { LinksContainer, NavContainer, NavLink, Title } from '../style/styled-components';

const Nav = () => {
  const token = localStorage.getItem('access_token');

  useEffect(() => {

  }, [token])

  return (
    <NavContainer>
      <Title>
        <NavLink to="/">프리온보딩</NavLink>
      </Title>
      <LinksContainer>
        {!token ? (
          <>
            <NavLink to="/signin">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/todo">ToDoList</NavLink>
            <NavLink to="/logout">로그아웃</NavLink>
          </>
        )}
      </LinksContainer>
    </NavContainer>
  )
}

export default Nav