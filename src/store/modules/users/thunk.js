// EXEMPLO

import { showUsers } from "./actions";

export const showUsersThunk = () => (dispatch, getState) => {
  // alguma logica

  dispatch(showUsers());
};

export default showUsersThunk;
