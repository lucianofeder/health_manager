// EXEMPLO

const token = localStorage.getItem("token") || "";
const user_id = localStorage.getItem("user_id") || "";

const defaultState = {
  token: token,
  user_id: user_id,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@user/SIGN_IN":
      const { token } = action;
      const { user_id } = action;

      return { token, user_id };

    default:
      return state;
  }
};

export default userReducer;
