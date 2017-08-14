import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	ScrollView,
	DrawerLayoutAndroid,

} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux';

import { 
	responsiveHeight, 
	responsiveWidth, 
	responsiveFontSize 
} from 'react-native-responsive-dimensions';

import Hamburger from 'react-native-hamburger';

//const bcg = './assets/wall.jpg';


export default class DetailedMEnu extends React.Component{

	constructor(props) {
		super(props);
		this.openDrawer = this.openDrawer.bind(this);

		this.state = {
			active: false,
		}
	}

	openDrawer() {
	        this.drawer.openDrawer();
	    }

	render(){

		var navigationView = (
		    <View style={styles.drawerContentWrapper}>

		      <Image style={styles.drawerImage} source={require('./assets/images/images.jpg')}>
		      	<Text style={styles.customerName}> Customer Name</Text>
		      </Image>

		      <View style={styles.drawerButtonsWrapper}>
		      	<TouchableOpacity style={styles.drButton}>
		      		<View style={styles.drButtonCont}>
		      			<View style={styles.drButtonIcon}>

		      			</View>
		      			<Text style={styles.drButtonText}>Profile</Text>
		      		</View>
		      	</TouchableOpacity>
		      	<TouchableOpacity style={styles.drButton}>
		      		<View style={styles.drButtonCont}>
		      			<View style={styles.drButtonIcon}>

		      			</View>
		      			<Text style={styles.drButtonText}>Filters</Text>
		      		</View>
		      	</TouchableOpacity>
		      	<TouchableOpacity style={styles.drButton}>
		      		<View style={styles.drButtonCont}>
		      			<View style={styles.drButtonIcon}>

		      			</View>
		      			<Text style={styles.drButtonText}>Promo</Text>
		      		</View>
		      	</TouchableOpacity>
		      </View>

		    </View>
		  );

		return(

			<DrawerLayoutAndroid
			  ref={(_drawer) => this.drawer = _drawer}
		      drawerWidth={250}
		      drawerPosition={DrawerLayoutAndroid.positions.Left}
		      renderNavigationView={() => navigationView}>

				<View style = {styles.mainContainer}>

					{/*<View style = {styles.myNavBar}>

						<View style = {styles.navTitleContainer}>

							<TouchableOpacity onPress = {this.openDrawer} style = {styles.navBtn}>
								<Image style = {styles.menuBtn} source = {require('./assets/icons/menu.png')}/>
							</TouchableOpacity>



							<Text style = {styles.navTitle}>Restaurant Name</Text>

							<View style = {styles.filterIconContainer}>
								<Image style = {styles.infoIcon} source = {require('./assets/icons/info.png')}/>
								<Image style = {styles.searchIcon} source = {require('./assets/icons/search.png')}/>

							</View>
						</View>
					</View>*/}

					<View style={styles.navBar}>
						
						<TouchableOpacity style={styles.drawerButton} onPress={this.openDrawer}>
							<Image style = {styles.menuBtn} source = {require('./assets/icons/menu.png')}/>
						</TouchableOpacity>

						<View style = {styles.navTitleContainer}>
							<Text style={styles.navTitle}>Restaurant Menu</Text>
						</View>

						<View style={{width: responsiveWidth(18), right: 20, flex: 1,}}>
							<View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
								<TouchableOpacity style={styles.searchButton}>
									<Image style = {styles.searchIcon} source = {require('./assets/icons/search.png')}/>
								</TouchableOpacity>

								<TouchableOpacity style={styles.infoButton}>
									<Image style = {styles.infoIcon} source = {require('./assets/icons/info.png')}/>
								</TouchableOpacity>
							</View>

						</View>

					</View>

					<View style = {styles.mainContent}>

						<View style = {styles.restoProfileConatiner}>
							<View style = {styles.restoProfile}>
								<Image style = {styles.restoLogo} source = {require('./assets/icons/info.png')}/>
								<View style = {styles.restoInfo}>
									<Text style = {styles.restoName}>Restaurant Name</Text>

									<View style = {styles.ratesConatiner}>
										<Image style = {styles.rateIcon} source = {require('./assets/icons/yellowstar.png')}/>
										<Image style = {styles.rateIcon} source = {require('./assets/icons/yellowstar.png')}/>
										<Image style = {styles.rateIcon} source = {require('./assets/icons/yellowstar.png')}/>
										<Image style = {styles.rateIcon} source = {require('./assets/icons/yellowstar.png')}/>
										<Image style = {styles.rateIcon} source = {require('./assets/icons/yellowstar.png')}/>
									</View>

									<Text style = {styles.restoMore}>Lorem ipsum dolor sit amet.</Text>
								</View>
							</View>

							<View style = {styles.restoPrices}>
								<View style = {styles.restoPrice}>
									<Text style = {styles.minOrder}>Min Order: </Text>
									<Text style = {styles.minOrderPrice}> 5000 Rwf</Text>
								</View>

							</View>

						</View>

						<View style = {styles.mainMenuContainer}>
							<View style = {styles.mainMenuTitle}>
								<Text style = {styles.mainMenuItem}>Menu Header</Text>
							</View>
						</View>

						<ScrollView style = {styles.fullMenu}>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}> 
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

							<View style = {styles.mainMenuContainer}>
								<TouchableOpacity style = {styles.mainMenu} onPress = { () => {Actions.ProductName();}}>
									<Text style = {styles.mainMenuItem}>Lorem Ipsum</Text>
								</TouchableOpacity>
							</View>

						</ScrollView>

						
					</View>
					

				</View>
			</DrawerLayoutAndroid>

			);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		//backgroundColor: 'transparent',
		flex: 1,
		


	},

	mainContent: {
		flex: 1,
	},

	navBar: {
		backgroundColor: '#ad5a44',
        alignSelf: 'stretch',
        top: 0,
        right: 0,
        left: 0,
        height: responsiveHeight(10),
        // height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        width: null,
	},

	navTitleContainer: {
		// flex: 1,
		//position: 'absolute',
		//alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		//flexDirection:'row', 
		//flexWrap:'wrap',
	},

	navBtn: {
		// flex: 1,
		justifyContent: 'center',
		//alignItems: 'center',
		paddingLeft: 10,
		width: 100,
		marginTop: 10,
		
	},

	navTitle: {
		color: '#fff',
		fontSize: responsiveFontSize(2.5),
		//left: 20,
		// backgroundColor: 'grey',
		alignItems: 'center',
	},

	navTitleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: responsiveWidth(60),
	},

	searchButton: {
		// backgroundColor: 'green',
		height: responsiveHeight(7),
	    width: responsiveWidth(9),
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	infoButton: {
		// backgroundColor: 'blue',
		height: responsiveHeight(7),
	    width: responsiveWidth(9),
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	drawerButton: {
		// backgroundColor: 'red',
		height: responsiveHeight(7),
	    width: responsiveWidth(12),
	    alignItems: 'center',
	    justifyContent: 'center',
	    left: 6,
	},

	menuBtn: {
		height: responsiveHeight(4),
		width: responsiveWidth(7),
	},

	searchIcon: {
		height: responsiveHeight(3),
		width: responsiveWidth(6),
	},

	infoIcon: {
		height: responsiveHeight(3),
		width: responsiveWidth(6),
	},


	// myNavBar: {
	// 	height: 70,
	// 	backgroundColor: '#ad5a44',
	// 	zIndex: 100,
	// 	// borderBottomColor: 'grey',
	// 	// borderBottomWidth: 5,

	// },

	// navTitleContainer: {
	// 	flex: 1,
	// 	//position: 'absolute',
	// 	//alignItems: 'center',
	// 	justifyContent: 'center',
	// 	//flexDirection:'row', 
	// 	//flexWrap:'wrap',
	// },

	// navTitle: {
	// 	color: 'white',
	// 	fontSize: responsiveFontSize(3),
	// 	//textAlign: 'left',
	// 	marginLeft: 30,
	// 	padding: 20,
	// 	position: 'absolute',
	// 	//paddingTop: 90,
	// },

	// navBtn: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	//alignItems: 'center',
	// 	paddingLeft: 10,
	// 	width: 100,
	// 	marginTop: 10,
		
	// },

	// menuBtn: {
	// 	height: 30,
	// 	width: 30,
	// },

	// infoIcon: {
	// 	resizeMode: 'center',
	// 	height: 25,
	// 	width: 25,
	// },

	// searchIcon: {
	// 	resizeMode: 'center',
	// 	height: 25,
	// 	width: 25,
	// 	marginRight: 40,
	// 	marginTop: -25,
	// },

	// filterIconContainer: {
	// 	flex: 1,
	// 	//backgroundColor: 'green',
	// 	alignItems: 'flex-end',
	// 	//position: 'absolute',
	// 	marginTop: -40,
	// 	marginRight: 20,
	// },

	restoProfileConatiner: {
		//flex: 1,
		position: 'relative',
	},

	restoProfile: {
		//flex: 1,
		backgroundColor: '#f2f0f0',
		height: responsiveHeight(25),
		//position: 'absolute',
		flexDirection: 'row',
		alignSelf: 'stretch',
		width: responsiveWidth(100),
	},

	restoLogo: {
		resizeMode: 'center',
		height: responsiveHeight(25),
		width: responsiveWidth(25),
		marginLeft: 10,
	},

	restoInfo: {
		//marginTop: -100,
		width: responsiveWidth(60),
		alignItems: 'center',
		justifyContent: 'center',
	},

	restoName: {
		color: 'black',
		fontSize: responsiveFontSize(3),
		textAlign: 'center',
	},

	ratesConatiner: {
		alignItems: 'center',
		marginBottom: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		//marginLeft: 140,
	},

	rateIcon: {
		height: responsiveHeight(6),
		width: responsiveWidth(6),
		resizeMode: 'center',
		//position: 'relative',
		marginLeft: 10,
	},

	restoMore: {
		color: 'grey',
		fontSize: responsiveFontSize(2.2),
		textAlign: 'center',
	},

	restoPrices: {
		backgroundColor: '#e6e6e6',
		height: responsiveHeight(5),
		justifyContent: 'center',
	},

	restoPrice: {
		marginLeft: 20,
		flexDirection: 'row',
	},

	minOrder: {
		color: 'grey',
		fontSize: responsiveFontSize(2.2),
	},

	minOrderPrice: {
		//marginTop: -21,
		fontSize: responsiveFontSize(2.2),
		marginLeft: 5,
	},



	fullMenu: {
		flex: 1,
		backgroundColor: 'white',
	},

	mainMenuContainer: {
		paddingLeft: 20,
		paddingRight: 20,
	},

	mainMenu: {
		paddingLeft: 20,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.2)',
		height: responsiveHeight(10),
	},

	mainMenuTitle: {
		alignItems: 'center',
		paddingLeft: 20,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.2)',
		height: responsiveHeight(6),
	},

	mainMenuItem: {
		fontSize: responsiveFontSize(2.5),
		color: 'grey',
	},

	drawerContentWrapper: {
		backgroundColor: 'rgb(248, 242, 245)',
		height: responsiveHeight(100)
	},

	drawerImage: {
		backgroundColor: 'grey',
		height: 150,
	},

	drawerButtonsWrapper: {
		// width: 150
		left: 30,
		top: 20,
		width: 150
	},

	drButton: {
		borderBottomWidth: 1,
		borderBottomColor: '#fff'
	},

	drButtonCont: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop: 10,
	},

	drButtonIcon: {
		height: 30,
		width: 30,
		backgroundColor: '#000',
	},

	drButtonText: {
		color:'#000',
		fontSize: 20,
		left: 30,
	},

	customerName: {
		color: '#fff',
		fontSize: 23,
		top: 115,
		left: 5,
	},



})