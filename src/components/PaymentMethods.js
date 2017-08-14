import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Alert,
  Button,
  Modal,
  DrawerLayoutAndroid,
  Image,
  Dimensions,
  Animated 
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';

import RadioButton from 'radio-button-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import HideableView from 'react-native-hideable-view';


export default class RestaurantsInLocation extends React.Component{
  constructor(props) {
      super(props);
      this.openDrawer = this.openDrawer.bind(this);
      this.state = {

      };
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    

  render(){
    
    // const test = () => { Alert.alert(x); };

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



            <Text style = {styles.navTitle}>Payment Methods</Text>

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
              <Text style={styles.navTitle}>Payment Methods</Text>
            </View>

        </View>

        <ScrollView>
        <View style={styles.mainContent}>
    
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15}}>Example@me.com</Text>
                <Text style={{paddingTop: 8, paddingBottom: 5, fontSize: responsiveFontSize(1.5)}}>Added 22-07-2017</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod} onPress={() => {Actions.ConfirmPaymentVisa();}}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15}}>4576 **** **** ****</Text>
                <Text style={{paddingTop: 8, paddingBottom: 5, fontSize: responsiveFontSize(1.5)}}>Expires 10-19</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15}}>**** **** **** 2356</Text>
                <Text style={{paddingTop: 8, paddingBottom: 5, fontSize: responsiveFontSize(1.5)}}>Expires 10-19</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15, paddingBottom: 5}}>+250 78 **** **</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15, paddingBottom: 5}}>+250 72 **** **</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.paymentMethod}>
                <View style={{backgroundColor: 'red', height: responsiveHeight(7), width: responsiveWidth(25)}}>
                </View>
                <Text style={{fontSize: responsiveFontSize(2.5), paddingTop: 15, paddingBottom: 5}}>+250 73 **** ***</Text>
              </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
        
      </View>
      </DrawerLayoutAndroid>

      )
      

    }

}




const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebe2e2',
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

  drawerContentWrapper: {
    backgroundColor: '#ebe2e2',
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

  mainContent: {

  },

  paymentMethod: {
    paddingLeft: 40, 
    paddingTop: 20, 
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },




  // myNavBar: {
  //   height: 70,
  //   backgroundColor: '#ad5a44',
  //   zIndex: 100,
  //   // borderBottomColor: 'grey',
  //   // borderBottomWidth: 5,

  // },

  // navTitleContainer: {
  //   flex: 1,
  //   //position: 'absolute',
  //   //alignItems: 'center',
  //   justifyContent: 'center',
  //   //flexDirection:'row', 
  //   //flexWrap:'wrap',
  // },

  // navTitle: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(3),
  //   //textAlign: 'left',
  //   marginLeft: 30,
  //   padding: 20,
  //   position: 'absolute',
  //   //paddingTop: 90,
  // },

  // navBtn: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   //alignItems: 'center',
  //   paddingLeft: 10,
  //   width: 100,
  //   marginTop: 10,
    
  // },

  // menuBtn: {
  //   height: 30,
  //   width: 30,
  // },

  // infoIcon: {
  //   resizeMode: 'center',
  //   height: 25,
  //   width: 25,
  //   marginRight: 10,
  // },

  // searchIcon: {
  //   resizeMode: 'center',
  //   height: 25,
  //   width: 25,
  //   marginRight: 50,
  //   marginTop: -25,
  // },

  // filterIconContainer: {
  //   flex: 1,
  //   //backgroundColor: 'green',
  //   alignItems: 'flex-end',
  //   //position: 'absolute',
  //   marginTop: -40,
  //   marginRight: 20,
  // },


})