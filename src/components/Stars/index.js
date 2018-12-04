import { Icon } from "native-base";
import React, { Component } from "react";
import { View } from "react-native";
const stars = props => {
	console.log("PROPS ARE", props);
	return (
		<View style={{ justifyContent: "center", flexDirection: "row" }}>
			{getStars(props.numberOfStars)}
		</View>
	);
};

const getStars = numberOfStars => {
	let arr = [];
	for (var i = 0; i < 5; i++) {
		if (numberOfStars > i)
			arr.push(
				<Icon
					name="star"
					active
					style={{ color: "yellow", borderColor: "black" }}
				/>
			);
		else arr.push(<Icon name="star" />);
	}
	return arr;
};
export default stars;
