import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TODO_URL } from '../api/api';
import { CheckBoxStyle, FlexComponent, ToDoButton, ToDoInput, UlStyle } from '../style/styled-components';

const Todo = () => {
    const [todos, setTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [updateValues, setUpdateValues] = useState({}); // Updated: State to store update values
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('access_token');
    setToken(userToken);
  }, []);

  useEffect(() => {
    getTodos();
  }, [token]);

  const getTodos = async () => {
    if (!token) {
      navigate('/signin');
    } else {
      try {
        const response = await axios.get(TODO_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTodos(response.data);

        setIsUpdating(
          response.data.reduce((acc, todo) => {
            acc[todo.id] = false;
            return acc;
          }, {})
        );
      } catch (error) {
        console.log('ToDo 불러오기 실패');
        console.error(error);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpdateInputChange = (event, id) => {
    setUpdateValues((prevUpdateValues) => ({
      ...prevUpdateValues,
      [id]: event.target.value,
    }));
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== '') {
      setInputValue('');
    }

    try {
      await sendTodoRequest('post', '', {
        todo: inputValue,
        isDone: false,
      });
    } catch (error) {
      console.log('ToDo 추가 실패');
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await sendTodoRequest('delete', `/${id}`);
      console.log('ToDo 삭제 성공');
    } catch (error) {
      console.log('ToDo 삭제 실패');
      console.error(error);
    }
  };

  const handleUpdateTodo = async (id, isDone) => {
    try {
      setIsUpdating((prevIsUpdating) => ({
        ...prevIsUpdating,
        [id]: false,
      }));

      await sendTodoRequest('put', `/${id}`, {
        todo: updateValues[id],
        isDone: isDone,
      });
      console.log('ToDo 업데이트 완료');
    } catch (error) {
      console.log('ToDo 업데이트 실패');
      console.error(error);
    }
  };

  const sendTodoRequest = async (method, endpoint, data) => {
    try {
      await axios({
        method: method,
        url: `${TODO_URL}${endpoint}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      getTodos();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <FlexComponent>
      <h1>ToDo List</h1>
      <div>
        <ToDoInput
          data-testid="new-todo-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <ToDoButton data-testid="new-todo-add-button" onClick={handleAddTodo}>
          추가
        </ToDoButton>
      </div>

      <UlStyle>
        {todos.map((todo) => (
          <li key={todo.id}>
            <CheckBoxStyle
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleUpdateTodo(todo.id, !todo.isDone)}
            />
            {isUpdating[todo.id] ? (
              <>
                <ToDoInput
                  data-testid="modify-input"
                  value={updateValues[todo.id] || ''}
                  onChange={(event) => handleUpdateInputChange(event, todo.id)}
                />
                <ToDoButton
                  data-testid="submit-button"
                  onClick={() => handleUpdateTodo(todo.id, todo.isDone)}
                >
                  제출
                </ToDoButton>
                <ToDoButton
                  data-testid="cancel-button"
                  onClick={() => {
                    setIsUpdating((prevIsUpdating) => ({
                      ...prevIsUpdating,
                      [todo.id]: false,
                    }));
                  }}
                >
                  취소
                </ToDoButton>
              </>
            ) : (
              <>
                <span>{todo.todo}</span>
                <ToDoButton
                  data-testid="modify-button"
                  onClick={() => {
                    setIsUpdating((prevIsUpdating) => ({
                      ...prevIsUpdating,
                      [todo.id]: true,
                    }));
                    setUpdateValues((prevUpdateValues) => ({
                      ...prevUpdateValues,
                      [todo.id]: todo.todo,
                    }));
                  }}
                >
                  수정
                </ToDoButton>
                <ToDoButton
                  data-testid="delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  삭제
                </ToDoButton>
              </>
            )}
          </li>
        ))}
      </UlStyle>
    </FlexComponent>
  );
}

export default Todo