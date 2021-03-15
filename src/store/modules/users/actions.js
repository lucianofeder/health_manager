export const signIn = (token, user_id) => ({
  type: "@user/SIGN_IN",
  token,
  user_id,
});
