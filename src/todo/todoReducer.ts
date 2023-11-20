import { Action } from "redux";
import { ITEM_ADD, ITEM_EDIT, ITEM_TOGGLE_COMPLETED, ITEM_REMOVE, CLEAR_COMPLETED, CLEAR_ALL } from "./todoAC";
import { getNewId } from "../utils";

type Item = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  items: Array<Item>;
};

const initialState: State = {
  items: [],
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        items: [
          ...state.items,
          {
            id: getNewId(),
            done: false,
            text: (action as any).text,
          },
        ],
      };
    case ITEM_EDIT:
      const editAction = action as any;
      const editIndex = state.items.findIndex((item) => item.id === editAction.itemId);
      return {
        items: [
          ...state.items.slice(0, editIndex),
          { ...state.items[editIndex], text: editAction.text },
          ...state.items.slice(editIndex + 1),
        ],
      };
    case ITEM_TOGGLE_COMPLETED:
      const toggleAction = action as any;
      const toggleIndex = state.items.findIndex((item) => item.id === toggleAction.itemId);
      return {
        items: [
          ...state.items.slice(0, toggleIndex),
          { ...state.items[toggleIndex], done: !state.items[toggleIndex].done },
          ...state.items.slice(toggleIndex + 1),
        ],
      };
    case ITEM_REMOVE:
      const removeAction = action as any;
      const removeIndex = state.items.findIndex((item) => item.id === removeAction.itemId);
      return {
        items: [...state.items.slice(0, removeIndex), ...state.items.slice(removeIndex + 1)],
      };
    case CLEAR_COMPLETED:
      return {
        items: state.items.filter((item) => !item.done),
      };
    case CLEAR_ALL:
      return {
        items: [],
      };
    default:
      return state;
  }
};

export default todoReducer;