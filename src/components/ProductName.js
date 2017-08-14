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
        modalVisible: false,
        individualOrderModal: false,
        count: 1,
        count_2:1,
        value: 0,
        showing: false,
        howMuch: false,
        groupOrderModal: false,
        showing_2: false,
      };
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    setModalVisible = (visible) => {
      this.setState({modalVisible: true});
    };

    IndividualOrder = (visible) => {
    	this.setState({modalVisible: false});
    	this.setState({individualOrderModal: true});
    };

    howMuchModal = (visible) => {
    	this.setState({modalVisible: false});
    	this.setState({howMuch: true});
    };

    groupOrder = (visible) => {
    	this.setState({howMuch: false});
    	this.setState({groupOrderModal: true});
    };

    close_1 = (visible) => {
    	this.setState({individualOrderModal: false});
    	this.setState({modalVisible: false});

    };

    close_2 = (visible) => {
    	this.setState({individualOrderModal: false});
    	this.setState({modalVisible: true});
    };

    close_3 = (visible) => {
    	this.setState({howMuch: false});
    	this.setState({modalVisible: true});
    };

     close_4 = (visible) => {
    	this.setState({groupOrderModal: false});
    	this.setState({howMuch: true});
    };

    _incrementCount = () => {
     	this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    _decrementCount = (count) => {
     	this.setState(prevState => ({ count: prevState.count - 1 }));
    };

    handleOnPress = (value) => {
    	this.setState({value:value})
	  };

    ConfirmGroupOrder = (visible) => {
      this.setState({groupOrderModal: false});
      Actions.ConfirmOrder();
    };

    ConfirmIndividualOrder = (visible) => {
      this.setState({individualOrderModal: false});
      Actions.ConfirmOrder();
    }



  render(){
    
    let drinks = [{ value: 'Water'}, { value: 'Fanta'}, { value: 'Juice'}, { value: 'Beer'}, { value: 'Wine'}];
    let quantity = [{ value: '1'}, { value: '2'}, { value: '3'}, { value: '4'}, { value: '5'}, { value: '7'}, { value: '8'}, { value: '9'}];
    let food = [{ value: 'Hamburger'}, { value: 'Stroganof with chips'}, { value: 'Chicken'}, { value: 'Fruit salad'}, { value: 'Buffet'}];
    let x = this.state.numPeople;
    var group = [];
    for(let i=1; i<=x; i++){

    	group.push(
    		<View key={i}>

	    		<View style={{flexDirection: 'row', alignItems: 'center'}}>
	        		<Text style={{color: '#000', fontSize: responsiveFontSize(3)}}>Person {i}</Text>
	        		<Dropdown
	                	containerStyle={{width:responsiveWidth(48),left: 8, paddingLeft: 5,}}
	                	style={{}}
					    label='Select Item'
				        baseColor= 'black'
				        data={food}
			    	/>
	            </View>

    		</View>
    	)
    }
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



            <Text style = {styles.navTitle}>Product Name</Text>

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
              <Text style={styles.navTitle}>Product Name</Text>
            </View>

        </View>

        <View style={styles.mainContent}>
    
            <Image style={styles.prodPic} source={require('./assets/images/images.jpg')} />

            <ScrollView>
              <View style={styles.Wrapper}>


                <Text style={styles.prodTitle}>Lorem Ipsum</Text>
                <Text style={styles.prodDesc}>
                  Lorem ipsum dolor sit amet, consectetur  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                </Text>

                <View style={styles.priceWrap}>
                  <Text style={styles.Price}>Price</Text>
                  <View style={{alignSelf: 'flex-end', width: responsiveWidth(60)}}>
                    <Text style={styles.amount}>xxxxx Rwf</Text>
                  </View>
                </View>

                <View style={styles.priceWrap}>
                  <Text style={styles.Price}>Time</Text>
                  <View style={{alignSelf: 'flex-end', width: responsiveWidth(60)}}>
                    <Text style={styles.amount}>00:00</Text>
                  </View>
                </View>

                <TouchableHighlight style={styles.orderNowBut}>
                  <Text style={styles.orderNow} onPress={this.setModalVisible}>Order Now</Text>
                </TouchableHighlight>

                <Modal 
                  visible={this.state.modalVisible} 
                  transparent={true}
                  onRequestClose={() => {this.setModalVisible(false)}}>

                  <View style={styles.modalWrap}>
                    <View style={styles.modelView}>

                      <View style={styles.modelContentWrapper}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <TouchableOpacity style={styles.modalBack} onPress={this.close_1}>
                              <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={{color: '#000', fontSize: responsiveFontSize(3.5),}}>Order Type</Text>
                        </View>


                          <TouchableOpacity style={styles.orderTypeChoices} 
                            onPress={this.IndividualOrder}>

                            <View style={styles.orderType}>
                                <Text style={{fontSize: responsiveFontSize(3.5), color: '#000'}}>Individual</Text>
                                <Text style={{paddingLeft: 5, fontSize: responsiveFontSize(2),}}>
                                  Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor
                                </Text>
                            </View>

                          </TouchableOpacity>
                          <TouchableOpacity style={styles.orderTypeChoices} 
                            onPress={this.howMuchModal}>

                            <View style={styles.orderType}>
                                <Text style={{fontSize: responsiveFontSize(3.5), color: '#000'}}>Group Order</Text>
                                <Text style={{ fontSize: responsiveFontSize(2), paddingLeft: 5}}>
                                  Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor 
                                </Text>
                            </View>

                          </TouchableOpacity>
                          

                      </View>

                    </View>
                  </View>

                </Modal>

                <Modal
                  visible={this.state.individualOrderModal}
                  transparent={true}
                  onRequestClose={() => {this.IndividualOrder(false)}}>

                  <View style={styles.modalWrap}>

                  <View style={styles.modelView_2}>
                    <View style={styles.modelContentWrapper}>
                      <View style={{flexDirection: 'row', alignItems:'center', backgroundColor: 'rgba(186,141,132,0.7)'}}>
                          <TouchableOpacity style={styles.modalBack_2} onPress={this.close_2}>
                            <Text>X</Text>
                          </TouchableOpacity>
                          <Text style={{color: '#000', fontSize: responsiveFontSize(3),}}>Individual Order</Text>
                      </View>

                      <View style={{backgroundColor: 'rgba(255,255,255,0.75)', height: responsiveHeight(40), alignItems: 'center', justifyContent: 'center'}}>
                          <View style={{ alignItems: 'center'}}>
                            <Text style={{color: 'black', fontSize: responsiveFontSize(3.5), paddingBottom: 20}}>Quantity</Text>
                            <View style={{paddingBottom: 45}}>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={ () => this._decrementCount() } style={styles.decrementButton}>
                                  <Text style={{color: 'white'}}>-</Text>
                                </TouchableOpacity>
                              <View style={{paddingLeft: 5, paddingRight: 5,}}>
                                 <View  style={styles.counter}>
                                   <Text>{this.state.count}</Text>
                                 </View>
                              </View>
                              {/*<TextInput
                                style={{height: 30, width: 30, borderWidth: 1, padding:5, justifyContent:'center', alignItems:'center'}}
                                onChange={(count) => this.setState({count})}                     
                                underlineColorAndroid="transparent"
                              >
                             <Text>
                              {this.state.count}
                             </Text>
                             </TextInput> */}
                              <TouchableOpacity onPress={ () => this._incrementCount() } style={styles.incrementButton}>
                                            <Text style={{color: 'white'}}>+</Text>
                              </TouchableOpacity>
                              </View>
                            </View>
                          </View>

                          

                          <TouchableOpacity style={styles.checkOut} onPress = {this.ConfirmIndividualOrder}>
                            <Text style={{color: 'white', fontSize: responsiveFontSize(2.5),}}>Check Out</Text>
                          </TouchableOpacity>

                    </View>
                  </View>
                </View>
                </View>

                </Modal>

                <Modal 
                  visible={this.state.howMuch} 
                  transparent={true}
                  onRequestClose={() => {this.howMuchModal(false)}}>

                    <View style={styles.modalWrap}>
                      <View style={styles.modelView}>

                        <View style={styles.modelContentWrapper}>

                          <View style={{flexDirection: 'row', alignItems:'center'}}>
                              <TouchableOpacity style={styles.modalBack} onPress={this.close_3}>
                                <Text>X</Text>
                              </TouchableOpacity>
                          </View>

                        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 20}}>
                          
                          <Text style={{color: 'black', fontSize: 20}}>How many people?</Text>

                            <View style={{paddingTop: 15}}>
                              <TextInput
                                style={{height: responsiveHeight(6),width: responsiveWidth(22), borderWidth: 1, paddingTop:3, paddingBottom:3, alignItems:'center'}}
                                keyboardType = 'numeric'                   
                                underlineColorAndroid="transparent"
                                onChangeText={(numPeople) => this.setState({numPeople})}
                                  value={this.state.numPeople}
                             />

                            </View>

                            <View style={{paddingTop: 25}}>
                              <TouchableOpacity style={{
                                backgroundColor: '#ad5a44',
                                width: responsiveWidth(20),
                                height: responsiveHeight(6),
                                alignItems: 'center',
                                justifyContent: 'center',
                              }} onPress={this.groupOrder}>

                                <Text style={{
                                  color: '#fff',
                                  fontSize: responsiveFontSize(3), 
                                        }}>Ok</Text>
                              </TouchableOpacity>
                            </View> 
                          </View> 

                        </View>

                      </View>
                    </View>

                </Modal>

                <Modal 
                  visible={this.state.groupOrderModal} 
                  transparent={true}
                  onRequestClose={() => {this.groupOrder(false)}}>

                    <View style={styles.modalWrap}>
                      <View style={styles.modelView_2}>

                          <View style={styles.modelContentWrapper}>

                        <View style={{flexDirection: 'row', alignItems:'center', backgroundColor: 'rgba(186,141,132,0.7)'}}>
                            <TouchableOpacity style={styles.modalBack_2} onPress={this.close_4}>
                              <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={{color: '#000', fontSize: 20,}}>Group Order</Text>
                          </View>

                          <View style={{backgroundColor: 'rgba(255,255,255,0.75)', height: responsiveHeight(65), paddingLeft:20}}>

                          <Text style={{color: '#000', fontSize: responsiveFontSize(3), paddingTop: 10}}>Number of people: {x}</Text>

                          <ScrollView style={{}}> 
                            
                            {group}

                          </ScrollView>

                          <View style={{paddingBottom: 20, paddingTop: 20, width: responsiveWidth(70)}}>
                            <TouchableOpacity style={styles.checkOut_2} onPress = {this.ConfirmGroupOrder}>
                                <Text style={{color: 'white', fontSize: responsiveFontSize(2.5)}}>Check Out</Text>
                            </TouchableOpacity>
                          </View>

                          </View>
                              
                          </View>

                      </View>
                    </View>

                </Modal>
              </View>

            </ScrollView>

        </View>
      </View>
      </DrawerLayoutAndroid>

      )
      

    }

}


// const SideNavBar = DrawerNavigator({
//  SignUp: {screen: SignUp}
// });


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
    flex: 1,

  },

  prodPic: {
    height: responsiveHeight(30),
    width: responsiveWidth(100),
  },

  Wrapper: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 20,
    height: responsiveHeight(90),
    width: responsiveWidth(90),
    alignItems: 'center',
    flex: 1,
  },

  prodTitle: {
    color: '#000',
    fontSize: responsiveFontSize(3.5),
    paddingBottom: 8
  },

  prodDesc: {
    paddingBottom: 15,
    alignItems: 'center',
    fontSize: responsiveFontSize(2),
  },

  priceWrap: {
    flexDirection: 'row',
    paddingBottom: 10
  },

  Price: {
    color: '#000',
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(15)
  },

  amount: {
    color: '#000',
    alignSelf: 'flex-end',
    fontSize: responsiveFontSize(3),
  },

  orderNowBut: {
    //top: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#ad5a44',
    marginTop: 10,
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    // paddingRight: 15,
    // paddingLeft: 15,
    // paddingBottom: 5,
    // paddingTop: 5
  },

  orderNow: {
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
  },

  modalWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modelView: {
    height: responsiveHeight(48),
    width: responsiveWidth(85),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  modelContentWrapper: {
    // paddingTop: 10,
  },

  orderTypeChoices: {
    backgroundColor: '#ebe2e2',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  orderType: {

  },

  modalBack: {
  	// backgroundColor: '#ccc',
  	height: responsiveHeight(10),
  	width: responsiveWidth(14),
  	alignItems: 'center',
  	justifyContent: 'center'
  },

  modelView_2: {
    width: responsiveWidth(85),
  },

  modalBack_2: {
  	// backgroundColor: '#ccc',
  	height: responsiveHeight(6),
  	width: responsiveWidth(14),
  	alignItems: 'center',
  	justifyContent: 'center'
  },

  decrementButton: {
  	backgroundColor: '#574e4e',
  	height: 28,
  	width: 28,
  	alignItems: 'center',
  	justifyContent: 'center'
  },

  incrementButton: {
  	backgroundColor: '#574e4e',
  	height: 28,
  	width: 28,
  	alignItems: 'center',
  	justifyContent: 'center',
  },

  counter: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	height: 25,
  	width: 28,
  	backgroundColor: 'white',
  },

  checkOut: {
  	backgroundColor: '#ad5a44',
  	width: responsiveWidth(35),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
  	// paddingLeft: 20,
  	// paddingRight: 20,
  	// paddingTop: 5,
  	// paddingBottom: 5,
  },

  checkOut_2: {
  	backgroundColor: '#ad5a44',
  	width: responsiveWidth(35),
    height: responsiveHeight(6),
    justifyContent: 'center',
  	// paddingTop: 5,
  	// paddingBottom: 5,
  	alignSelf: 'flex-end',
    alignItems: 'center'
  },

  decrementButton_2: {
  	backgroundColor: '#574e4e',
  	height: 23,
  	width: 23,
  	alignItems: 'center',
  	justifyContent: 'center'
  },

  incrementButton_2: {
  	backgroundColor: '#574e4e',
  	height: 23,
  	width: 23,
  	alignItems: 'center',
  	justifyContent: 'center',
  },

  counter_2: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	height: 20,
  	width: 23,
  	backgroundColor: 'white',
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