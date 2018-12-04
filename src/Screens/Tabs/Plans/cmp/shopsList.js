import React, { Component } from "react";
import { View } from "react-native";
import {
	Container,
	Header,
	Content,
	List,
	ListItem,
	Thumbnail,
	Text,
	Left,
	Body,
	Right,
	Button,
	Icon
} from "native-base";
import Stars from "Stars/index.js";
export default class ListThumbnailExample extends Component {
	render() {
		const {
			name,
			image,
			id,
			onItemPress,
			price,
			location,
			phoneNumber
		} = this.props;
		return (
			<ListItem thumbnail>
				<Left>
					<Thumbnail square source={image} />
				</Left>
				<Body>
					<Text style={{}}>{name}</Text>

					<Text note numberOfLines={1}>
						{location}
					</Text>
					<Text note numberOfLines={1}>
						{phoneNumber}
					</Text>
				</Body>
				<Right>
					<Text note>{price} $</Text>

					<Stars numberOfStars={3} />
				</Right>
			</ListItem>
		);
	}
}
