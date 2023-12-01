import { ADD_ITEM, DELETE_ITEM, RESET_STATE, VIEW_ITEM } from "../constants";
const inItData = [];

function reducer(state = inItData, action) {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload.item;
      const existingItem = state.findIndex((item) => {
        return item.id === newItem.id;
      });
      console.log(newItem, existingItem);
      if (existingItem !== -1) {
        const updateStates = state.map((item, index) => {
          return index === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        return updateStates;
      } else {
        return [...state, { ...action.payload.item, quantity: 1 }];
      }

    case DELETE_ITEM:
      const deleteItem = action.payload.item;
      const existItem = state.findIndex((item) => {
        return item.id === deleteItem.id;
      });

      if (existItem !== -1) {
        const updateStates = state.map((item, index) => {
          if (item.quantity > 1) {
            return index === existItem
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          } else {
            return index !== existItem && item;
          }
        });
        const res = updateStates.filter(
          (item) => item !== null && item !== undefined && item.quantity>0
        );
        console.log("res", res);
        return res;
      }

      return state;
    case VIEW_ITEM:
      return state;
    case RESET_STATE:
        state = inItData;
        return state;
    default:
      return state;
  }
}

export default reducer;
