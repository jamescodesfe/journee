import { Action } from "redux";

export const ITEM_ADD = "ITEM_ADD";
export const ITEM_EDIT = "ITEM_EDIT";
export const ITEM_REMOVE = "ITEM_REMOVE";
export const ITEM_TOGGLE_COMPLETED = "ITEM_TOGGLE_COMPLETED";

export type TodoAction =
    | AddTodoAction
    | EditTodoAction
    | RemoveTodoAction
    | ToggleCompletedAction;

export interface AddTodoAction extends Action<typeof ITEM_ADD> {
  text: string;
}

export const addTodo = (text: string): AddTodoAction => ({
  type: ITEM_ADD,
  text,
});

export interface EditTodoAction extends Action<typeof ITEM_EDIT> {
  itemId: string;
  text: string;
}

export const editTodo = (itemId: string, text: string): EditTodoAction => ({
  type: ITEM_EDIT,
  itemId,
  text,
});

export interface RemoveTodoAction extends Action<typeof ITEM_REMOVE> {
  itemId: string;
}

export const removeTodo = (itemId: string): RemoveTodoAction => ({
  type: ITEM_REMOVE,
  itemId,
});

export interface ToggleCompletedAction extends Action<typeof ITEM_TOGGLE_COMPLETED> {
  itemId: string;
}

export const toggleCompleted = (itemId: string): ToggleCompletedAction => ({
  type: ITEM_TOGGLE_COMPLETED,
  itemId,
});