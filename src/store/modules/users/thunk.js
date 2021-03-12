import { signIn } from "./actions";

export const signInThunk = (token, user_id) => (dispatch) => {
  dispatch(signIn(token, user_id));
};
