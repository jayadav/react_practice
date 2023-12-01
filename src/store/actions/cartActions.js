import { ADD_ITEM, DELETE_ITEM, VIEW_ITEM } from "../constants";
import store from "../store";

const add_item = (item) => {
  store.dispatch({
    type: ADD_ITEM,
    payload: {
      item: item,
    },
  });
};

const delete_item = (item) => {
  store.dispatch({
    type: DELETE_ITEM,
    payload: {
      item: item,
    },
  });
};

const view_item = () => {
  store.dispatch({ type: VIEW_ITEM });
};

export { add_item, delete_item, view_item };
