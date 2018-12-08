import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import Input from "cmp/Forms/NBformInput.js";
import EmailIMG from "assets/Forms/email.png";
import KeyIMG from "assets/Forms/lock.png";
import { Container, Header, Content, Button, Text } from "native-base";
import OutlinedBtn from "cmp/Buttons/Outlined";
import ImgBtn from "cmp/Buttons/imgWithBtn";
import rightArrow from "assets/right-arrow.png";
import Modal from "./Modal/index";
import { onPress, ToggleServersModal, onItemPress, Login } from "./actions";
import { styles } from "./styles";
import { checkData } from "./helpers";
import PICKER from "cmp/Picker/nativeBasePicker";
class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			error: { username: false, password: false }
		};
	}
	componentDidMount() {
		// this.props.Login({ username: "a", password: "a", selectedServerID: "b" });
	}
	Login = () => {
		const { username, password } = this.state;
		const { Login, selectedServerID } = this.props;
		const error = checkData({ username, password });
		if (!error) Login({ username, password, selectedServerID });
		else this.setState({ error });
	};

	render() {
		const {
			onPress,
			ToggleServersModal,
			visible,
			onItemPress,
			selectedServerName
		} = this.props;
		const { error } = this.state;
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<View style={{ width: "100%" }}>
					<Input
						img={EmailIMG}
						onChange={username => this.setState({ username })}
						placeholder={"username"}
						error={error.username}
					/>
					<Input
						img={EmailIMG}
						onChange={password => this.setState({ password })}
						placeholder={"password"}
						error={error.password}
					/>
				</View>
				<View style={styles.loginView}>
					<OutlinedBtn name={"Login"} onPress={this.Login} />
				</View>
			</View>
		);
	}
}
const mapStateToProps = ({ LoginRed }) => {
	const { visible, servers, selectedServerName, selectedServerID } = LoginRed;
	return { visible, servers, selectedServerName, selectedServerID };
};
export default connect(
	mapStateToProps,
	{ onPress, ToggleServersModal, onItemPress, Login }
)(login);
