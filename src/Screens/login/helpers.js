export const checkData = ({ username, password }) => {
  if (!username) return { username: true };
  if (!password) return { password: true };
  return false;
};
