import moment from "moment";

const getCLients = () => {
  clients = [
    { id: 1, name: "jad" },
    { id: 2, name: "ameen" },
    { id: 3, name: "tony" },
    { id: 4, name: "sharbel" }
  ];
  return clients;
};
const INITIAL_STATE = {
  planDate: new Date(),
  clientSelected: null,
  Clients: getCLients()
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case "PLAN_DATE_CHANGED":
      return { ...state, planDate: action.payload };
    case "PLAN_CLIENT_SELECTED":
      return { ...state, clientSelected: action.payload };
    default:
      return state;
  }
};
