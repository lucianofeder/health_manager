// EXEMPLO

import { SHOW_USERS } from "./actionTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_USERS:
      return action.list;

    default:
      return state;
  }
};

export default usersReducer;
