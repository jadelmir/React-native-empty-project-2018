export const onDateChange = payload => {
  console.log("action onDateChange", payload);
  return { type: "PLAN_DATE_CHANGED", payload };
};

export const onSelectChange = payload => {
  console.log("payload", payload);
  return { type: "PLAN_SELECTE_CLIENT_CHANGE", payload };
};

export const onPressItem = payload => {
  return { type: "PLAN_CLIENT_SELECTED", payload };
};
