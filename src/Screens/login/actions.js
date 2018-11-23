export const onPress = () => {
  console.log("we are here in the onPress");
  return { type: "GOTO_MAIN_PAGE" };
};

export const ToggleServersModal = () => {
  return { type: "TOGGLE_SERVERS_MODAL" };
};
export const onItemPress = payload => {
  console.log("payload is", payload);
  return { type: "SELECTED_SERVER", payload };
};
export const Login = ({ username, password, selectedServerID }) => {
  return { type: "GOTO_MAIN_PAGE" };
  return dispatch => {};
};
