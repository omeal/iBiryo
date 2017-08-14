import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,

} from 'react-native';

import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';

import {
	Actions,
} from 'react-native-router-flux';

export default class SignUp extends React.Component{
	state = {
		code: '',
	};

	render(){
		return(

			<View style = {styles.mainContainer}>

				<View style = {styles.myNavBar}>
					<View style = {styles.navTitleContainer}>
						<Text style = {styles.navTitle}>Confirm</Text>
					</View>
				</View>

				<View style = {styles.mainContent}>

					<View style = {styles.formContainer}>
						<Text style = {styles.formTitle}>Enter your confirmation code</Text>
						<TextInput 
							style = {styles.formInput} 
							placeholder="Confirmation code" 
							placeholderTextColor="grey" 
							underlineColorAndroid="transparent"
							maxLength={6}
							onChangeText = {(text) => {
								this.setState({
									code: text,
								});
							}}
							value = {this.state.code}
						/>
					</View>

					<View style = {styles.btnContainer}>
						<TouchableOpacity style = {styles.signUpBtn} onPress = {() => {
							Actions.Setlocation();
							// alert(this.state.email + this.state.phone);
						}}>
				            <Text style = {styles.btnText}>Confirm</Text>
				        </TouchableOpacity>
					</View>
				</View>

			</View>

			);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
		flex: 1,
	},

	mainContent: {
		padding: 25,

	},

	regTitleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 40,
	},

	formTitle: {
		fontSize: responsiveFontSize(2.5),
		color: 'black',
		textAlign: 'center',
		marginBottom: 20,
	},

	formInput: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},

	formContainer: {
		paddingBottom: 40,
	},

	signUpBtn: {
		backgroundColor: '#ad5a44',
		width: responsiveWidth(30),
		height: responsiveHeight(6),
		alignItems: 'center',
		justifyContent: 'center',
	},

	btnText: {
		color: 'white',
		fontSize: responsiveFontSize(2.5),
	},

	myNavBar: {
		height: 70,
		backgroundColor: '#ad5a44',
		zIndex: 100,
		// borderBottomColor: 'grey',
		// borderBottomWidth: 5,

	},

	btnContainer: {
		alignItems: 'center',
	},

	navTitleContainer: {
		flex: 1,
		//position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		//flexDirection:'row', 
		//flexWrap:'wrap',
	},

	navTitle: {
		color: 'white',
		fontSize: responsiveFontSize(2.5),
		//textAlign: 'left',
		//marginLeft: 100,
		//padding: 20,
		//position: 'absolute',
		//paddingTop: 90,
	},
})