import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, FlatList } from "react-native";
import Calendar from "./calendar";
import HeaderRight from "./Header/HeaderRight";
import ITEMS from "cmp/list/nativeBaseListItem";
import PartItem from "./cmp/partItem";
import { Container } from "native-base";
import { addPlan, onItemPress } from "./actions";
class Plan extends Component {
	static navigationOptions = {
		title: "Parts"
		// headerRight: <HeaderRight />
	};

	render() {
		const { markedDates, data, onItemPress } = this.props;
		return (
			// <View style={{ flex: 1 }}>
			// 	<Calendar markedDates={markedDates} />
			// 	<ITEMS data={data} onItemPress={onItemPress} />
			// 	<FlatList
			// 		data={[{ key: "a" }, { key: "b" }]}
			// 		renderItem={({ item }) => <Text>{item.key}</Text>}
			// 	/>
			// </View>
			<Container>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<PartItem
							name={item.name}
							Img={item.image}
							id={item.id}
							onItemPress={onItemPress}
						/>
					)}
				/>
			</Container>
		);
	}
}
const mapStateToProps = ({ PlanRed }) => {
	const { markedDates, data } = PlanRed;
	return { markedDates, data };
};
export default connect(
	mapStateToProps,
	{ addPlan, onItemPress }
)(Plan);
