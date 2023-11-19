import React, { useState } from "react";
import styled from "styled-components";
import {addTodo, editTodo, removeTodo} from "../todo/todoAC";
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
  align-items: center; /* Center items vertically */
`;

const ItemInput = styled.input`
  width: 100%;
`;

const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})``;

const DeleteButton = styled.button`
  margin-left: 8px; /* Add some margin to separate the button from the input */
`;

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();

  // State to track the input value for the new todo
  const [newTodoText, setNewTodoText] = useState<string>("");

  // State to track the selected items for deletion
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleAddTodo = () => {
    // Dispatch addTodo action with the input value
    dispatch(addTodo(newTodoText));

    // Clear the input after adding the todo
    setNewTodoText("");
  };

  const handleToggleSelect = (itemId: string) => {
    // Toggle the selected state for the item
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // Item is already selected, remove it from the selected list
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        // Item is not selected, add it to the selected list
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleDeleteSelected = () => {
    // Dispatch the delete action for each selected item
    selectedItems.forEach((itemId) => {
      // Dispatch the removeTodo action with the id of the todo to be deleted
      dispatch(removeTodo(itemId));
    });

    // Clear the selected items after deleting
    setSelectedItems([]);
  };

  return (
      <List>
        {items.map((item) => (
            <Item key={item.id}>
              <ItemCheckbox
                  onChange={() => handleToggleSelect(item.id)}
                  checked={selectedItems.includes(item.id)}
              />
              <ItemInput
                  type="text"
                  value={item.text}
                  onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
              />
              {/* Delete button for existing todos */}
              {selectedItems.includes(item.id) && (
                  <DeleteButton onClick={() => handleDeleteSelected()}>Delete</DeleteButton>
              )}
            </Item>
        ))}
        <Item key="new">
          <ItemCheckbox />
          <ItemInput
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
          />
          {/* Button to add a new todo */}
          <button onClick={handleAddTodo}>Add Todo</button>
        </Item>
      </List>
  );
};

export default ItemList;