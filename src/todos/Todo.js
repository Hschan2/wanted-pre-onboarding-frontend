import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TODO_URL } from '../api/api';
import { CheckBoxStyle, FlexComponent, ToDoButton, ToDoInput } from '../style/styled-components';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [isUpdating, setIsUpdating] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('access_token');
        setToken(storedToken);
    }, []);

    useEffect(() => {
        loadTodos();
    }, [token]);

    const loadTodos = async () => {
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
                setIsUpdating(Array.from({ length: response.data.length }, () => false));
            } catch (error) {
                console.log("ToDo 불러오기 실패")
                console.error(error);
            }
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUpdateInputChange = (event) => {
        setUpdateValue(event.target.value);
    };

    const handleAddTodo = async () => {
        if (inputValue.trim() !== '') {
            setInputValue('');
        }

        try {
            await axios.post(TODO_URL, {
                    todo: inputValue,
                    isDone: false,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            loadTodos();
        } catch (error) {
            console.log("ToDo 추가 실패")
            console.error(error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`${TODO_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("ToDo 삭제 성공");
            loadTodos();
        } catch (error) {
            console.log("ToDo 삭제 실패");
            console.error(error);
        }
    };

    const handleUpdateTodo = async (id, index, isDone) => {
        const newUpdating = [...isUpdating];
        newUpdating[index] = false;
        setIsUpdating(newUpdating);
        updateTodo(id, updateValue, isDone);
    };

    const updateTodo = async (id, updatedTodo, isDone) => {
        try {
            await axios.put(`${TODO_URL}/${id}`, {
                    todo: updatedTodo,
                    isDone: isDone,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log("ToDo 업데이트 완료");
            loadTodos();
        } catch (error) {
            console.log("ToDo 업데이트 실패");
            console.error(error);
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

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    <CheckBoxStyle
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={() => updateTodo(todo.id, todo.todo, !todo.isDone)}
                    />
                    {isUpdating[index] ? (
                        <>
                        <ToDoInput
                            data-testid="modify-input"
                            value={updateValue}
                            onChange={handleUpdateInputChange}
                        />
                        <ToDoButton
                            data-testid="submit-button"
                            onClick={() => handleUpdateTodo(todo.id, index, todo.isDone)}
                        >
                            제출
                        </ToDoButton>
                        <ToDoButton
                            data-testid="cancel-button"
                            onClick={() => {
                            const newUpdating = [...isUpdating];
                            newUpdating[index] = false;
                            setIsUpdating(newUpdating);
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
                            const newUpdating = [...isUpdating];
                            newUpdating[index] = true;
                            setIsUpdating(newUpdating);
                            setUpdateValue(todo.todo);
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
            </ul>
        </FlexComponent>
    )
}

export default Todo