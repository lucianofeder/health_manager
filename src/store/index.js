import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "thunk";

// EXEMPLO DE IMPORTAÇÃO
import usersReducer from "./modules/users/usersReducer";

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
