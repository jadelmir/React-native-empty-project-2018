import moment from "moment";

markedDates = {
  "2018-11-16": { marked: true },
  "2018-11-17": { marked: true },
  "2018-11-18": { disabled: true }
};

const INITIAL_STATE = {
  markedDates: markedDates,
  selectedDate: moment(),
  data: [
    { name: "jad el mir", id: 1, date: "8:00pm" },
    { name: "Tony el mir", id: 2, date: "9:00pm" },
    { name: "Moricce el mir", id: 3, date: "10:00pm" }
  ]
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    default:
      return state;
  }
};
