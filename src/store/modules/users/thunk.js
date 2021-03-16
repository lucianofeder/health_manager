import { signIn, redirectToGroup } from "./actions";

export const signInThunk = (token, user_id) => (dispatch) => {
  dispatch(signIn(token, user_id));
};

export const redirectToGroupThunk = (curr_id) => (dispatch) => {
  dispatch(redirectToGroup(curr_id));
};
