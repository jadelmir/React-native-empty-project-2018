import moment from "moment";
import { ShopList } from "./data";

const INITIAL_STATE = {
	SelectedShops: [],
	ShopList: ShopList
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case "GOTO_PARTS_DETAIL":
			return {
				...state,
				SelectedShops: state.ShopList.filter(
					shop => shop.partID == action.payload
				)
			};
		default:
			return state;
	}
};
