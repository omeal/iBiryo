import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Alert,
	Button,
	Modal,
	DrawerLayoutAndroid,
	Image
} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux';

import { 
	responsiveHeight, 
	responsiveWidth, 
	responsiveFontSize 
} from 'react-native-responsive-dimensions';


export default class RestaurantsInLocation extends React.Component{
	constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }


	render(){
		const test = () => { Alert.alert('test'); }
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

			<View style={styles.mainContainer}>

				{/*<View style = {styles.myNavBar}>

					<View style = {styles.navTitleContainer}>

						<TouchableOpacity onPress = {this.openDrawer} style = {styles.navBtn}>
							<Image style = {styles.menuBtn} source = {require('./assets/icons/menu.png')}/>
						</TouchableOpacity>



						<Text style = {styles.navTitle}>Restaurant, Loc</Text>

						<View style = {styles.filterIconContainer}>
							<Image style = {styles.infoIcon} source = {require('./assets/icons/filter.png')}/>
							<Image style = {styles.searchIcon} source = {require('./assets/icons/search.png')}/>
							<Image style = {styles.likeIcon} source = {require('./assets/icons/like.png')}/>

						</View>
					</View>
				</View>*/}
				<View style={styles.navBar}>
						
						<TouchableOpacity style={styles.drawerButton} onPress={this.openDrawer}>
							<Image style = {styles.menuBtn} source = {require('./assets/icons/menu.png')}/>
						</TouchableOpacity>

						<View style = {styles.navTitleContainer}>
							<Text style={styles.navTitle}>Restaurant, Loc</Text>
						</View>

						<View style={{width: responsiveWidth(18), right: 20, flex: 1,}}>
							<View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
								<TouchableOpacity style={styles.searchButton}>
									<Image style = {styles.searchIcon} source = {require('./assets/icons/search.png')}/>
								</TouchableOpacity>

								<TouchableOpacity style={styles.filterButton}>
									<Image style = {styles.filterIcon} source = {require('./assets/icons/filter.png')}/>
								</TouchableOpacity>

								<TouchableOpacity style={styles.likeButton}>
									<Image style = {styles.likeIcon} source = {require('./assets/icons/like.png')}/>
								</TouchableOpacity>
							</View>
						</View>

				</View>
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.mainContent}>

					
						<View style={styles.scrollWrap}>
				        	

				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>

				        		<Image style={styles.restaurantPic} source={require('./assets/images/The-dining-room.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>
				        		<Image style={styles.restaurantPic} source={require('./assets/images/Logotipo-31.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>

				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>

				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>

				        		<Image style={styles.restaurantPic} source={require('./assets/images/The-dining-room.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>
				        		<Image style={styles.restaurantPic} source={require('./assets/images/Logotipo-31.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>

				        		<Image style={styles.restaurantPic} source={require('./assets/images/The-dining-room.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>
				        		<Image style={styles.restaurantPic} source={require('./assets/images/Logotipo-31.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>

				        		<Image style={styles.restaurantPic} source={require('./assets/images/The-dining-room.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	<TouchableOpacity style={styles.scrollContent} onPress={() => {
				        		Actions.RestaurantMenu();
				        	}}>
				        		<Image style={styles.restaurantPic} source={require('./assets/images/Logotipo-31.jpg')} />

				        		<View style={styles.restaurantDesc}>
				        			<Text style={styles.restName}>Restaurant Name</Text>
				        			<View style = {{
				        				flexDirection: 'row',
				        			}}>
				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>

				        				<Image style={{
				        					resizeMode: 'center',
				        					height: responsiveHeight(5),
				        					width: responsiveWidth(5),
				        				}} source = {require('./assets/icons/yellowstar.png')}/>
				        			</View>
				        			<View style={styles.restSloganWrap}>
					        			<Text style={styles.restSlogan}>
					        				Restaurant slogan Restaurant slogan Restaurant slogan
					        			</Text>
				        			</View>
				        		</View>

				        	</TouchableOpacity>
				        	

				        	
				        </View>

					</View>
				</ScrollView>
			</View>
			</DrawerLayoutAndroid>

			)
			

		}

}


// const SideNavBar = DrawerNavigator({
// 	SignUp: {screen: SignUp}
// });


const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#fff',
		flex: 1,
	},

	myNavBar: {
		height: 70,
		backgroundColor: '#ad5a44',
		zIndex: 100,
		// borderBottomColor: 'grey',
		// borderBottomWidth: 5,

	},

	navBar: {
		backgroundColor: '#ad5a44',
        alignSelf: 'stretch',
        top: 0,
        right: 0,
        left: 0,
        //flex: 1,
        height: responsiveHeight(10),
        // height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        //width: responsiveWidth(100),

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

	filterButton: {
		// backgroundColor: 'blue',
		height: responsiveHeight(7),
	    width: responsiveWidth(9),
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	likeButton: {
		// backgroundColor: 'red',
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

	filterIcon: {
		height: responsiveHeight(3),
		width: responsiveWidth(6),
	},

	likeIcon: {
		height: responsiveHeight(3),
		width: responsiveWidth(6),
	},


	mainContent: {
		paddingLeft: 8,

	},

	// scrollContainer: {},

	scrollContent: {
		paddingBottom: 10,
		paddingTop: 10,
		borderBottomWidth: 1,
      	borderBottomColor: '#ddd',
      	flexDirection: 'row',
	},

	scrollWrap: {
		paddingRight: 8,
	},

	restaurantPic: {

		height: 75,
		width: 75,
		borderRadius: 100,
		left: 10,
		borderWidth: 0.1,
		borderColor: '#000'
	},

	restaurantDesc: {
		left: 30,
		justifyContent: 'center'
	},

	restName: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: responsiveFontSize(2.5),
		bottom: 3,
	},

	restSloganWrap: {
		width: responsiveWidth(42),
		top: 2,
	},

	restSlogan: {
		color: '#000',
		fontSize: responsiveFontSize(1.7),
		// fontSize: 10,
	},

	// drawerButton: {
	// 	// backgroundColor: 'red',
	// 	height: 40,
	//     width: 40,
	//     alignItems: 'center',
	//     justifyContent: 'center',
	//     left: 6,
	// },

	// drawerIcon: {
	// 	color: '#fff',
	// },

	// searchIcon: {
	// 	color: '#fff',
	// },

	// filterIcon: {
	// 	color: '#fff'
	// },

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

	infoIcon: {
		resizeMode: 'center',
		height: responsiveHeight(6),
		width: responsiveWidth(6),
		backgroundColor: 'blue',
		marginRight: 40,
	},

	// searchIcon: {
	// 	resizeMode: 'center',
	// 	height: responsiveHeight(6),
	// 	width: responsiveWidth(6),
	// 	backgroundColor: 'red',
	// 	marginRight: 80,
	// 	marginTop: -25,
	// },

	// likeIcon: {
	// 	resizeMode: 'center',
	// 	height: responsiveHeight(6),
	// 	width: responsiveWidth(6),
	// 	backgroundColor: 'green',
	// 	marginTop: -25,
	// },

	filterIconContainer: {
		// flex: 1,
		//backgroundColor: 'green',
		alignItems: 'flex-end',
		//position: 'absolute',
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: -40,
		marginRight: 20,
	},

})