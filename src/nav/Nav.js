import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LinksContainer, NavContainer, NavLink, Title } from '../style/styled-components';
import handleLogout from '../components/Logout';

const Nav = () => {
  const getToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Title>
        <NavLink to="/">프리온보딩</NavLink>
      </Title>
      <LinksContainer>
        {!getToken ? (
          <>
            <NavLink to="/signin">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/todo">ToDoList</NavLink>
            <NavLink onClick={() => handleLogout(navigate)}>로그아웃</NavLink>
          </>
        )}
      </LinksContainer>
    </NavContainer>
  )
}

export default Nav