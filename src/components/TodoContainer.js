// TodoContainer.jsx
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { defaultTheme } from "./theme";
import styled from "styled-components";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    );
  };
  return (
    <Container>
      <Title>Get Things Done!</Title>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todo key={index} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </Container>
  );
};

export default TodoContainer;

const Container = styled.div`
  background-color: ${defaultTheme.colors.YankeesBlue};
  padding: 32px;
`;
const Title = styled.h1`
  color: ${defaultTheme.colors.white};
  margin-bottom: 8px;
  font-size: 28px;
`;
