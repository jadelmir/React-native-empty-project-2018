Clients = [
  { id: "1", fullName: "Jad El Mir", location: "Batha", speciality: "Doctor" },
  { id: "2", fullName: "Jad El Mir", location: "Batha", speciality: "Doctor" },
  { id: "3", fullName: "Jad El Mir", location: "Batha", speciality: "Doctor" },
  { id: "4", fullName: "Jad El Mir", location: "Batha", speciality: "Doctor" }
];

const INITIAL_STATE = {
  Clients: Clients
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    default:
      return state;
  }
};
