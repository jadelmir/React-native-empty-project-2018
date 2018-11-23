servers = [
  { id: "1", name: "server 1" },
  { id: "2", name: "server 2" },
  { id: "3", name: "server 3" },
  { id: "4", name: "server 4" },
  { id: "5", name: "server 5" }
];

const INITIAL_STATE = {
  visible: false,
  servers: servers,
  selectedServerName: null,
  selectedServerID: null
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case "TOGGLE_SERVERS_MODAL":
      return { ...state, visible: !state.visible };
    case "SELECTED_SERVER":
      return {
        ...state,
        selectedServerName: payload.name,
        selectedServerID: payload.id,
        visible: false
      };
    default:
      return state;
  }
};
