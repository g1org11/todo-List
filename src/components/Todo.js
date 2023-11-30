// Todo.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { defaultTheme } from "./theme";

const Todo = ({ task, deleteTodo, editTodo }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleToggleCompletion = () => {
    setCompleted(!isCompleted);
  };

  return (
    <TodoWrapeer>
      <p
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={handleToggleCompletion}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          style={{ marginLeft: "12px", cursor: "pointer" }}
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </TodoWrapeer>
  );
};

export default Todo;
const TodoWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${defaultTheme.colors.VioletsAreBlue};
  color: ${defaultTheme.colors.white};
  padding: 12px 16px;
  border-radius: 5px;
  margin-bottom: 16px;
`;
