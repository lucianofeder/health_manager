import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// EXEMPLO DE IMPORTAÇÃO
import usersReducer from "./modules/users/reducer";

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
