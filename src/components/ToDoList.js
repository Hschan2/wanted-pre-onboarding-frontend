import axios from 'axios';
import React, { useState } from 'react'
import { TODO_URL } from '../api/api';
import { Button, Checkbox, Container, Input, Label, ListItem, Text } from '../style/styled-components';

const ToDoList = ({ data, getData }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isCompleted, setIsCompleted] = useState(data.isCompleted);
    const [todo, setTodo] = useState(data.todo);
    const id = data.id;
    const userToken = localStorage.getItem("access_token");

    const handleDelete = async () => {
        await axios
            .delete(`${TODO_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            .then(() => {
                getData()
            })
            .catch((err) => {
                console.log(`Error: ${err.response.data.message}`);
            });
    }

    const handleSubmit = async () => {
        if (todo === data.todo) {
            alert("내용이 같습니다.");
            return;
        }

        await axios
            .put(`${TODO_URL}/${id}`, {
                todo,
                isCompleted
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    "Content-Type": "application/json"
                }
            })
            .then(() => {
                setIsUpdating(false);
                getData();
            })
            .catch(err => {
                console.log(`Error: ${err.response.data.message}`);
            })
    }

    const handleCheckBox = async () => {
        setIsUpdating(prev => !prev);

        axios.put(`${TODO_URL}/${id}`, {
            todo: data.todo,
            isUpdating: !isUpdating
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
    }

    const updateClick = (e) => {
        e.preventDefault();

        setIsUpdating(true);
    }

    const submitClick = (e) => {
        e.preventDefault();

        setTodo(e.currentTarget.value);
    }

    const cancelClick = (e) => {
        e.preventDefault();

        setIsUpdating(false);
        setIsCompleted(data.isCompleted);
    }

    return (
        <ListItem>
            {!isUpdating ? (
                <Container>
                    <Label>
                        <Checkbox
                            type='checkbox'
                            checked={data.isCompleted}
                            onChange={handleCheckBox}
                        />
                        <Text>{data.todo}</Text>
                    </Label>
                    <Button
                        backgroundColor='#1192ff'
                        data-testid="modify-button"
                        onClick={updateClick}
                    >
                        수정
                    </Button>
                    <Button
                        backgroundColor='#ff6961'
                        data-testid="delete-button"
                        onClick={handleDelete}
                    >
                        삭제
                    </Button>
                </Container>
            ) : (
                <Container>
                    <Label>
                        <Checkbox
                            type='checkbox'
                            checked={isUpdating}
                            onChange={handleCheckBox}
                        />
                        <Input
                            defaultValue={data.todo}
                            onChange={submitClick}
                        />
                    </Label>
                    <Button
                        backgroundColor='#1192ff'
                        data-testid="submit-button"
                        onClick={handleSubmit}
                    >
                        제출
                    </Button>
                    <Button
                        backgroundColor='#ff6961'
                        data-testid="cancel-button"
                        onClick={cancelClick}
                    >
                        삭제
                    </Button>
                </Container>
            )}
        </ListItem>
    )
}

export default ToDoList