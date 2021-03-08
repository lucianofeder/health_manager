//EXEMPLO

import { SHOW_USERS } from "./actionTypes";

export const showUsers = (list) => ({
  type: SHOW_USERS,
  list,
});
