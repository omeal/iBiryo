import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,

} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux';

//const bcg = './assets/wall.jpg';


export default class SetLocation extends React.Component{
	render(){
		return(

			<View style = {styles.mainContainer}>
				

		        <Image
				  style = {styles.bcgImg}
		          source={require('./assets/newbck.jpg')}
		        />

				<View style = {styles.mainContent}>

					<View style = {styles.setImgContainer}>
						<Image
						  style = {styles.setImg}
				          source={require('./assets/call.jpg')}
				        />
					</View>

					<View>
						<TextInput 
							style = {styles.formInput}
							placeholder="City" 
							placeholderTextColor="white" 
							underlineColorAndroid="transparent"
							returnKeyType="done"
    						autoCapitalize="words"
						/>
					</View>

					<View>
						<TextInput 
							style = {styles.formInput}
							placeholder="Area" 
							placeholderTextColor="white" 
							underlineColorAndroid="transparent"
							returnKeyType="done"
    						autoCapitalize="words"
						/>
					</View>

					<View style = {styles.BtnContainer}>
						<TouchableOpacity style = {styles.showBtn}>
				            <Text style = {styles.btnText}>Show Restaurants</Text>
				        </TouchableOpacity>
					</View>
				</View>
				

			</View>

			);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		//backgroundColor: 'transparent',
		flex: 1,
		


	},

	bcgImg: {
		// flex: 1,
		position: 'absolute',
		resizeMode: 'cover',
		width: null,
		height: null,
		// zIndex: 100,
		// marginBottom: 30,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

	mainContent: {
		padding: 50,

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
		borderBottomColor: 'white',
		borderBottomWidth: 1.6,
		color: 'white',
	},

	formContainer: {
		paddingBottom: 40,
	},

	BtnContainer: {
		alignItems: 'center',
	},

	showBtn: {
		backgroundColor: '#7c5c5c',
		width: 200,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30,
		marginTop: 30,
	},

	btnText: {
		color: 'white',
		fontSize: 20,
	},

	setImg: {
		height: 150,
		width: 150,
		resizeMode: 'center',
	},

	setImgContainer: {
		alignItems: 'center',
		marginBottom: 100,
		marginTop: 30,
	},
})