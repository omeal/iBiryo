import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,

} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux';

export default class SignUp extends React.Component{
	state = {
		email: '',
		phone: '',
	};

	render(){
		return(

			<View style = {styles.mainContainer}>
				<View style = {styles.mainContent}>
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
							Actions.Setlocation();
							// alert(this.state.email + this.state.phone);
						}}>
				            <Text style = {styles.btnText}>Sign Up</Text>
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

	regTitle: {
		color: 'red',
		fontSize: 20,
	},

	formTitle: {
		fontSize: 16,
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
		width: 80,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	btnText: {
		color: 'white',
		fontSize: 20,
	},
})