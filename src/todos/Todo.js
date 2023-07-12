import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TODO_URL } from '../api/api';
import { FlexComponent, ToDoButton, ToDoInput, UlStyle } from '../style/styled-components';
import ToDoList from '../components/ToDoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const userToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const getData = async () => {
    await axios
      .get(`${TODO_URL}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        },
      })
      .then(response => {
        const newToDo = response.data;
        setTodos(newToDo);
      })
      .catch(err => {
        console.log(`Error: ${err.response.data.message}`);
      })
  }

  useEffect(() => {
    if (!userToken) {
      alert("회원만 이용이 가능합니다. 로그인이 필요합니다.");
      navigate('/signin');
      return;
    }

    getData();
  }, []);

  const handleAddTodo = async () => {
    if (!todo || typeof todo !== 'string') {
      console.log('Error: newTodo must be a non-empty string');
      return;
    }

    await axios
      .post(`${TODO_URL}`, {
        todo,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        getData();
      })
      .catch(err => {
        console.log(`Error: ${err.response.data.message}`);
      })

    setTodo('');
  }

  const handleInputChange = (e) => {
    const value = (e.currentTarget.value);
    setTodo(value);
  }

  return (
    <FlexComponent>
      <h1>ToDo List</h1>
      <div>
        <ToDoInput
          data-testid="new-todo-input"
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder='Write a New ToDo'
        />
        <ToDoButton
          data-testid="new-todo-add-button"
          onClick={handleAddTodo}
        >
          추가
        </ToDoButton>
      </div>

      <UlStyle>
        {todos.map((todo) => (
          <ToDoList key={todo.id} data={todo} getData={getData} />
        ))}
      </UlStyle>
    </FlexComponent>
  );
}

export default Todo