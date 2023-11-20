import { ITEM_ADD, ITEM_EDIT, ITEM_REMOVE, ITEM_TOGGLE_COMPLETED, TodoAction } from "./todoAC";
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

const todoReducer = (state: State = initialState, action: TodoAction): State => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        items: [
          ...state.items,
          {
            id: getNewId(),
            done: false,
            text: action.text,
          },
        ],
      };
    case ITEM_EDIT:
      const index = state.items.findIndex((item) => item.id === action.itemId);
      // Feel free to use immutability-helper or an equivalent library.
      return {
        items: [
          ...state.items.slice(0, index),
          { ...state.items[index], text: action.text },
          ...state.items.slice(index + 1),
        ],
      };
    case ITEM_REMOVE:
      return {
        items: state.items.filter((item) => item.id !== action.itemId),
      };
    case ITEM_TOGGLE_COMPLETED:
      return {
        items: state.items.map((item) =>
            item.id === action.itemId ? { ...item, done: !item.done } : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;