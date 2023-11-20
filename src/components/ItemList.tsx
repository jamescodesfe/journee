import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { addTodo, editTodo, toggleCompleted, removeTodo, clearCompleted, clearAll } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";

const Container = styled.div`
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
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

const AddTodoButton = styled.button`
  margin-top: 8px;
`;

const ActionSection = styled.div`
  margin-top: 16px;
`;

const CountText = styled.p`
  font-size: 16px;
`;

const ClearCompletedButton = styled.button`
  margin-right: 16px;
`;

const ClearAllButton = styled.button``;

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = useCallback(() => {
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  }, [dispatch, newTodoText]);

  const handleToggleSelect = (itemId: string) => {
    dispatch(toggleCompleted(itemId));
  };

  const handleDeleteTodo = (itemId: string) => {
    dispatch(removeTodo(itemId));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  const completedItems = items.filter((item) => item.done);

  return (
      <Container>
        <List>
          <Item key="new">
            <ItemCheckbox />
            <ItemInput
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
            />
            <AddTodoButton disabled={!newTodoText.trim()} onClick={handleAddTodo}>
              Add Todo
            </AddTodoButton>
          </Item>
          {items.length > 0 && <Heading>List of Items</Heading>}
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
        </List>
        {completedItems.length > 0 && (
            <ActionSection>
              <CountText>{`Number of Completed Items: ${completedItems.length}`}</CountText>
              <ClearCompletedButton onClick={handleClearCompleted}>Clear Completed</ClearCompletedButton>
              <ClearAllButton onClick={handleClearAll}>Clear All</ClearAllButton>
            </ActionSection>
        )}
      </Container>
  );
};

export default ItemList;