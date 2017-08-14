import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	DrawerLayoutAndroid,

} from 'react-native';

import { 
	KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import {
	Actions,
} from 'react-native-router-flux';

import { 
	responsiveHeight, 
	responsiveWidth, 
	responsiveFontSize,
} from 'react-native-responsive-dimensions';


// import Hamburger from 'react-native-hamburger';

//const bcg = './assets/wall.jpg';


export default class SetLocation extends React.Component{

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

					<View style={styles.navBar}>
						
						<TouchableOpacity style={styles.drawerButton} onPress={this.openDrawer}>
							<Image style = {styles.menuBtn} source = {require('./assets/icons/menu.png')}/>
						</TouchableOpacity>

						<View style = {styles.navTitleContainer}>
							<Text style={styles.navTitle}>Address</Text>
						</View>

						<View style={{width: responsiveWidth(18), right: 20, flex: 1,}}>
							<View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
								<TouchableOpacity style={styles.filterButton}>
									<Image style = {styles.filterIcon} source = {require('./assets/icons/filter.png')}/>
								</TouchableOpacity>
							</View>

						</View>

					</View>
					

			        <Image
					  style = {styles.bcgImg}
			          source={require('./assets/images/newbck.jpg')}
			        />

					<KeyboardAwareScrollView  behavior = "padding" style = {styles.mainContent}>

						<View style = {styles.setImgContainer}>
							<Image
							  style = {styles.setImg}
					          source={require('./assets/icons/setloc.png')}
					        />
					        <View style = {styles.setTitleContainer}>
					        	<Text style = {styles.setTitle}>Set location</Text>
					        </View>
						</View>

						<View style = {styles.setForms}>
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
								<TouchableOpacity 
									onPress = {() => {
										Actions.RestaurantsInLocation();
									}} 

									style = {styles.showBtn}
								>
						            <Text style = {styles.btnText}>Show Restaurants</Text>
						        </TouchableOpacity>
							</View>
						</View>
					</KeyboardAwareScrollView>
					

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
		//padding: 50,
		flex: 1,
		height: responsiveHeight(100),

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
		width: responsiveWidth(50),
		height: responsiveHeight(8),
		alignItems: 'center',
		justifyContent: 'center',
		//padding: 30,
		marginTop: 30,
	},

	btnText: {
		color: 'white',
		fontSize: responsiveFontSize(2.5),
	},

	setImg: {
		height: responsiveHeight(20),
		width: responsiveWidth(20),
		resizeMode: 'center',
	},

	setImgContainer: {
		alignItems: 'center',
		//marginBottom: 20,
		// marginTop: 30,

		height: responsiveHeight(15),
	},

	setTitleContainer: {
		height: responsiveHeight(20),
	},

	setForms: {
		flex: 1,
		height: responsiveHeight(85),
		//width: responsiveWidth(80),
		padding: 20,
		//alignItems: 'center',
		justifyContent: 'center',
	},

	navBar: {
		backgroundColor: 'rgba(139,131,120,0.2)',
        alignSelf: 'stretch',
        top: 0,
        right: 0,
        left: 0,
        height: responsiveHeight(10),
        //height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        width: null,
        zIndex: 9999,
	},

	navTitleContainer: {
		// flex: 1,
		//position: 'absolute',
		//alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		width: responsiveWidth(66),
		//flexDirection:'row', 
		//flexWrap:'wrap',
	},

	navTitle: {
		color: '#fff',
		fontSize: responsiveFontSize(3.2),
		left: 10,
		// backgroundColor: 'grey',
		
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

	setTitle: {
		color: 'white',
		fontSize: responsiveFontSize(4),
	},

	filterIcon: {
		resizeMode: 'center',
		height: 20,
		width: 20,
	},

	filterIconContainer: {
		flex: 1,
		//backgroundColor: 'green',
		alignItems: 'flex-end',
		//position: 'absolute',
		marginTop: -40,
		marginRight: 20,
	},

	drawerContentWrapper: {
		backgroundColor: 'rgb(248, 242, 245)',
		height: responsiveHeight(100),
	},

	drawerImage: {
		backgroundColor: 'grey',
		height: 150,
	},

	drawerButtonsWrapper: {
		// width: 150
		left: 30,
		top: 20,
		width: 150,
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