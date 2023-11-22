import React, {useCallback, useState} from "react";
import styled from "styled-components";
import {addTodo, clearAll, clearCompleted, editTodo, removeTodo, toggleCompleted} from "../../todo/todoAC";
import {useAppDispatch, useAppSelector} from "../../types";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    font-family: 'Unbounded', sans-serif;
`;

const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding-inline-start: 0;
`;

const Item = styled.li`
    width: 100%;
    margin: 4px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CustomInput = styled.input<{ completed?: boolean }>`
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    padding-right: 20px;
    color: ${(props) => (props.completed ? '#999' : '#333')};
    cursor: text;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    vertical-align: middle;

    &::placeholder {
        color: #999;
    }

    &:focus {
        border-bottom: 1px solid #333;
    }
`;

const ItemCheckbox = styled.input.attrs({
    type: "checkbox",
})``;

const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
`;

const AddTodoButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
`;

const ActionSection = styled.div`
    margin-top: 16px;
`;

const CountText = styled.p`
    font-size: 12px;
    font-family: 'Unbounded', sans-serif;
    font-weight: 300;
`;

const ClearCompletedButton = styled.button`
    margin-right: 16px;
    font-size: 14px;
    font-family: 'Unbounded', sans-serif;
    font-weight: 500;
    border: none;
    background-color: transparent;
    padding-left: 0;
    cursor: pointer;

    &:hover {
        color: #777;
    }
`;

const ClearAllButton = styled.button`
    font-size: 14px;
    font-family: 'Unbounded', sans-serif;
    font-weight: 500;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        color: #777;
    }
`;

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
                    <CustomInput
                        type="text"
                        placeholder="Add A New Task"
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
                    />
                    <AddTodoButton disabled={!newTodoText.trim()} onClick={handleAddTodo}>
                        <AddIcon/>
                    </AddTodoButton>
                </Item>
                {items.length > 0 && <Heading>Add Another Task?</Heading>}
                {items.map((item) => (
                    <Item key={item.id}>
                        <ItemCheckbox onChange={() => handleToggleSelect(item.id)} checked={item.done}/>
                        <CustomInput
                            type="text"
                            value={item.text}
                            completed={item.done}
                            onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
                        />
                        <DeleteButton onClick={() => handleDeleteTodo(item.id)}>
                          <DeleteIcon />
                        </DeleteButton>
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