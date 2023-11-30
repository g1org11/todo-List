import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "./theme";

const EditTodo = ({ editTodo, task }) => {
  console.log("Task:", task);
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id);
      setValue("");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        placeholder="Updatte Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Input>
      <Button type="submit"> Update Task</Button>
    </Form>
  );
};

export default EditTodo;
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
