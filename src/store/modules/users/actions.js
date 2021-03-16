export const signIn = (token, user_id) => ({
  type: "@user/SIGN_IN",
  token,
  user_id,
});

export const redirectToGroup = (curr_id) => ({
  type: "@user/REDIRECT",
  curr_id,
});
