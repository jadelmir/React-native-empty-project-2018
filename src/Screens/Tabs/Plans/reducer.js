import moment from "moment";
import { data } from "./Data";
markedDates = {
	"2018-11-16": { marked: true },
	"2018-11-17": { marked: true },
	"2018-11-18": { disabled: true }
};

const INITIAL_STATE = {
	markedDates: markedDates,
	selectedDate: moment(),
	data: data,
	selectedPart: null
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case "GOTO_PARTS_DETAIL":
			return {
				...state,
				selectedPart: state.data.find(res => res.id == action.payload)
			};
		default:
			return state;
	}
};
