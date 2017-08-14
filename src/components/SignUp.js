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

import { 
	KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

export default class SignUp extends React.Component{
	state = {
		email: '',
		phone: '',
	};

	render(){
		return(

			<View style = {styles.mainContainer}>

				<View style = {styles.myNavBar}>
					<View style = {styles.navTitleContainer}>
						<Text style = {styles.navTitle}>Register</Text>
					</View>
				</View>

				<KeyboardAwareScrollView style = {styles.mainContent}>
					<View style = {styles.regTitleContainer}>
						<Text style = {styles.regTitle}>Sign up to get started</Text>
					</View>

					<View style = {styles.formContainer}>
						<Text style = {styles.formTitle}>Enter your email address</Text>
						<TextInput 
							style = {styles.formInput} 
							placeholder="Email" 
							placeholderTextColor="grey" 
							underlineColorAndroid="transparent"
							onChangeText = {(text) => {
								this.setState({
									email: text,
								});
							}}
							value = {this.state.email}
						/>
					</View>

					<View style = {styles.formContainer}>
						<Text style = {styles.formTitle}>Enter your phone number</Text>

						<TextInput 
							style = {styles.formInput} 
							placeholder="Phone" 
							placeholderTextColor="grey" 
							underlineColorAndroid="transparent" 
							keyboardType="numeric" 
							maxLength={10}
							onChangeText = {(text) => {
								this.setState({
									phone: text,
								});
							}}
							value = {this.state.phone}
						/>
				
					</View>

					<View>
						<TouchableOpacity style = {styles.signUpBtn} onPress = {() => {
							Actions.ConfirmReg();
							// alert(this.state.email + this.state.phone);
						}}>
				            <Text style = {styles.btnText}>Sign up</Text>
				        </TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>

			</View>

			);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
	},

	mainContent: {
		//padding: 25,
		width: responsiveWidth(80),
		flex: 1,

	},

	regTitleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 40,
	},

	regTitle: {
		color: 'red',
		fontSize: responsiveFontSize(3),
	},

	formTitle: {
		fontSize: responsiveFontSize(2.5),
		color: 'black',
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
		width: responsiveWidth(100),
		backgroundColor: '#ad5a44',
		zIndex: 100,
		marginBottom: 20,
		// borderBottomColor: 'grey',
		// borderBottomWidth: 5,

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
		fontSize: 20,
		//textAlign: 'left',
		//marginLeft: 100,
		//padding: 20,
		//position: 'absolute',
		//paddingTop: 90,
	},
})