import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "./theme";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        placeholder="What is the task today"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Input>
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  width: 100%;
  margin-bottom: 16px;
`;
const Input = styled.input`
  outline: none;
  background: none;
  border: 1px solid ${defaultTheme.colors.VioletsAreBlue};
  padding: 8px 16px;
  margin-top: 16px;
  margin-bottom: 32px;
  width: 300px;
  color: ${defaultTheme.colors.white};
  &::placeholder {
    color: ${defaultTheme.colors.placeholder};
  }
`;
const Button = styled.button`
  background: ${defaultTheme.colors.VioletsAreBlue};
  color: ${defaultTheme.colors.white};
  border: none;
  padding: 8.8px;
  cursor: pointer;
`;
