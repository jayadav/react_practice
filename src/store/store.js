import { legacy_createStore as create_store } from "redux";
import reducer from "./reducers/cartReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools({
    trace: true
})
const store = create_store(reducer, composeEnhancer());
console.log(store.getState());
export default store;