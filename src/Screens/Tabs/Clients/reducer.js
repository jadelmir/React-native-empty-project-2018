Clients = [
	{
		id: "1",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "BMW",
		typeID: "1",
		phoneNumber: "702364123"
	},
	{
		id: "2",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "mercedes",
		typeID: "2",
		phoneNumber: "702364123"
	},
	{
		id: "3",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "cherokee",
		typeID: "3",
		phoneNumber: "702364123"
	},
	{
		id: "4",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "cherokee",
		typeID: "3",
		phoneNumber: "702364123"
	},
	{
		id: "5",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "cherokee",
		typeID: "3",
		phoneNumber: "702364123"
	},
	{
		id: "6",
		fullName: "Jad El Mir",
		location: "Batha",
		speciality: "hyundai",
		typeID: "4",
		phoneNumber: "702364123"
	}
];

const INITIAL_STATE = {
	Clients: Clients
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case "SELECTED_CAR_TYPE":
			console.log("payload", payload);

			return {
				...state,
				Clients: Clients.filter(res => res.typeID == payload)
			};
		default:
			return state;
	}
};
