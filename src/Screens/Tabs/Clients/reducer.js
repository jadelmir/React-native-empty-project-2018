Clients = [
	{
		id: "1",
		fullName: "JP-MOTORSPORT",
		location: "Jounieh",
		speciality: "BMW",
		typeID: "1",
		phoneNumber: "70123456"
	},
	{
		id: "2",
		fullName: "JP-MOTORSPORT",
		location: "Beirut",
		speciality: "Mercedes",
		typeID: "2",
		phoneNumber: "70123456"
	},
	{
		id: "3",
		fullName: "JP-MOTORSPORT",
		location: "Ghazir",
		speciality: "Jeep ",
		typeID: "3",
		phoneNumber: "70123456"
	},
	{
		id: "4",
		fullName: "JP-MOTORSPORT",
		location: "Dbayeh",
		speciality: "Lada",
		typeID: "3",
		phoneNumber: "70123456"
	},
	{
		id: "5",
		fullName: "JP-MOTORSPORT",
		location: "Tabarja",
		speciality: "Ferrari",
		typeID: "3",
		phoneNumber: "70123456"
	},
	{
		id: "6",
		fullName: "JP-MOTORSPORT",
		location: "Dawra",
		speciality: "Porsche",
		typeID: "4",
		phoneNumber: "70123456"
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
