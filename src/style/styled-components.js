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
    padding: 8px;
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

export const UlStyle = styled.ul`
  list-style-type: none;
`

export const ErrorMessage = styled.div`
  width: 400px;
  font-size: 14px;
  color: #FF0000;
  text-align: right;
  margin-bottom: 5px;
`

// ToDoList
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  width: 100wv;
  padding: 10px 10px;
  margin: -2px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => (props.isChecked ? '#1192FF' : 'transparent')};

  &:checked {
    background-color: #1192FF;
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 3px;
    height: 6px;
    border-style: solid;
    border-color: #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const Text = styled.span`
  margin-right: 20px;
  font-size: 18px;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;

export const Button = styled.button`
  width: 50px;
  padding: 5px;
  margin: 0px 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;

  &:hover {
      background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const Input = styled.input`
  margin-right: 10px;
`;