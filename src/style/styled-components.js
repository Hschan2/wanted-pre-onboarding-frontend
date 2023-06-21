import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Input 컴포넌트 스타일
export const FlexComponent = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SignInput = styled.input`
    width: 400px;
    padding: 15px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`

export const SignButton = styled.button`
    width: 400px;
    padding: 15px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`

// 메인화면 이미지
export const MainImage = styled.img`
    width: 500px;
`

// NavBer 스타일
export const NavContainer = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #1192ff;
  border-radius: 0 0 10px 10px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;

  &:first-of-type {
    margin-left: 0;
  }
`;

// ToDo Style
export const ToDoInput = styled.input`
  width: 200px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`

export const ToDoButton = styled.button`
    width: 50px;
    padding: 10px;
    margin: 0px 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
`

export const CheckBoxStyle = styled.input`
    accent-color: #1192ff;
`