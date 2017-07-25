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

export default class SetLocation extends React.Component{
	render(){
		return(

			<View>
				<View>
					<TextInput 
						placeholder="City" 
						placeholderTextColor="white" 
						underlineColorAndroid="transparent"
					/>
				</View>

				<View>
					<TextInput 
						placeholder="Area" 
						placeholderTextColor="white" 
						underlineColorAndroid="transparent"
					/>
				</View>

				<View>
					<TouchableOpacity>
			            <Text>Show Restaurants</Text>
			        </TouchableOpacity>
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