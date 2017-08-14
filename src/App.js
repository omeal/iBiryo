// import React, { Component } from 'react';
// import SignUp from './components/SignUp';
// import SetLocation from './components/SetLocation';

// import {
// 	Router,
// 	Scene,

// } from 'react-native-router-flux';

// export default class App extends React.component {
// 	render(){
// 		return(
// 			<Router>
// 				<Scene key='root'>
// 					<Scene key='Signup' component={SignUp} title='Register'></Scene>
// 					<Scene key='Setlocation' component={SetLocation} title='Set Location'></Scene>
// 				</Scene>
// 			</Router>

// 		);
// 	}
// }

// // export default App;



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
	DrawerNavigator,
} from 'react-navigation';

import SignUp from './components/SignUp';
import SetLocation from './components/SetLocation';
import ConfirmReg from './components/ConfirmReg';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantsInLocation from './components/RestaurantsInLocation';
import DetailedMenu from './components/DetailedMenu';
import ProductName from './components/ProductName';
import ConfirmOrder from './components/ConfirmOrder';
import ConfirmPaymentVisa from './components/ConfirmPaymentVisa';
import ThankYouScreen from './components/ThankYouScreen';
import PaymentMethods from './components/PaymentMethods';


import {
	Router,
	Scene,
} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
        // <Text style={styles.welcome}>
          // Welcome to React Native!
        // </Text>
      // </View>


      // NavBar Items
      // barButtonTextStyle = {styles.navBarButtonText} barButtonIconStyle = {styles.barButtonIcon}

	<Router navigationBarStyle = {styles.navbarStyles} titleStyle = {styles.navBarTitle} barButtonTextStyle = {styles.navBarButtonText} barButtonIconStyle = {styles.barButtonIcon}>
		<Scene key='root'>
			<Scene key='Signup' component={SignUp} title='Register' style = {styles.navbarStyles} hideNavBar={true}></Scene>
			<Scene key='Setlocation' component={SetLocation} title='Set Location' hideNavBar={true}></Scene>
			<Scene key='ConfirmReg' component={ConfirmReg} title='Confirm' hideNavBar={true}></Scene>
			<Scene key='RestaurantsInLocation' component={RestaurantsInLocation} hideNavBar></Scene>
			<Scene key='RestaurantMenu' component={RestaurantMenu} title='Menu' hideNavBar={true}></Scene>
			<Scene key='DetailedMenu' component={DetailedMenu} title='Detailed Menu' hideNavBar={true}></Scene>
      		<Scene key='ProductName' component={ProductName} title='Product Name' hideNavBar={true}></Scene>
      		<Scene key='ConfirmOrder' component={ConfirmOrder} title='Confirm Order' hideNavBar={true}></Scene>
      		<Scene key='PaymentMethods' component={PaymentMethods} title='Payment Methods' hideNavBar={true}></Scene>
      		<Scene key='ConfirmPaymentVisa' component={ConfirmPaymentVisa} title='Confirm Visa' hideNavBar={true}></Scene>
      		<Scene key='ThankYouScreen' component={ThankYouScreen} title='PThank You' hideNavBar={true}></Scene>
		</Scene>
	</Router>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },

  navbarStyles: {
  	backgroundColor: '#ad5a44',
  },

  navBarTitle: {
  	color: 'white',
  	 
  },

  navBarButtonText: {
  	color: 'white',
  },

  barButtonIcon: {
  	tintColor: 'rgb(255,255,255)',
  },

});

