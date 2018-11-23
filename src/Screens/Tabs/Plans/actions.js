export const addPlan = () => {
  console.log("we are here in the add plan");
  return { type: "" };
};
export const onPressAddPlan = () => {
  console.log("we are in the on press add plan");
  return { type: "GOTO_ADD_PLAN" };
};

export const onItemPress = payload => {
  return { type: "", payload };
};
