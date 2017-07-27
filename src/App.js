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

import SignUp from './components/SignUp';
import SetLocation from './components/SetLocation';

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
			<Scene key='Signup' component={SignUp} title='Register' style = {styles.navbarStyles}></Scene>
			<Scene key='Setlocation' component={SetLocation} title='Set Location'></Scene>
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

