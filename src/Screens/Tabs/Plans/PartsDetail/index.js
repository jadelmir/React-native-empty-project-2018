import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button, FlatList, Image } from "react-native";
import { Container } from "native-base";
import ShopsItems from "../cmp/shopsList";
class Plan extends Component {
	static navigationOptions = {
		title: "Parts Detail"
	};

	render() {
		const { selectedPart, data, onItemPress, SelectedShops } = this.props;
		const { image, name, id, description, ETA } = selectedPart;
		console.log("shops are", SelectedShops);
		return (
			<Container>
				<View style={{ maxHeight: 300 }}>
					<Image source={image} resizeMode="cover" style={{ maxHeight: 300 }} />
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 10,
						marginTop: 10
					}}
				>
					<Text
						style={{
							fontSize: 20
						}}
					>
						{name}
					</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 10
					}}
				>
					<Text style={{}}>{description}</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 10
					}}
				>
					<Text style={{}}>Duration : {ETA}</Text>
				</View>
				<View>
					<Text> Where to find </Text>
					<FlatList
						data={SelectedShops[0].shops}
						renderItem={({ item }) => (
							<ShopsItems
								name={item.name}
								price={item.price}
								location={item.location}
								image={item.image}
								phoneNumber={item.phoneNumber}
							/>
						)}
					/>
				</View>
			</Container>
		);
	}
}
const mapStateToProps = ({ PartsDetailsRed, PlanRed }) => {
	const { selectedPart } = PlanRed;
	const { SelectedShops } = PartsDetailsRed;
	return { selectedPart, SelectedShops };
};
export default connect(
	mapStateToProps,
	{}
)(Plan);
