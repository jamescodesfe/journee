import React, { useState } from "react";
import styled from "styled-components";
import { addTodo, editTodo, toggleCompleted, removeTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Item = styled.li`
  width: 100%;
  margin: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemInput = styled.input<{ completed?: boolean }>`
  width: 100%;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})``;

const DeleteButton = styled.button`
  margin-left: 8px;
`;

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  const handleToggleSelect = (itemId: string) => {
    dispatch(toggleCompleted(itemId));
  };

  const handleDeleteTodo = (itemId: string) => {
    dispatch(removeTodo(itemId));
  };

  return (
      <List>
        {items.map((item) => (
            <Item key={item.id}>
              <ItemCheckbox
                  onChange={() => handleToggleSelect(item.id)}
                  checked={item.done}
              />
              <ItemInput
                  type="text"
                  value={item.text}
                  completed={item.done}
                  onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
              />
              <DeleteButton onClick={() => handleDeleteTodo(item.id)}>Delete</DeleteButton>
            </Item>
        ))}
        <Item key="new">
          <ItemCheckbox />
          <ItemInput
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </Item>
      </List>
  );
};

export default ItemList;