import React, { Component } from 'react'
import {AppRegistry, Button, Image, StyleSheet} from 'react-native'
import {DrawerNavigator} from 'react-navigation'

class MyHomeScreen extends Component {
	static navigationOptions={
		drawerLabel:'Home',
		drawerIcon:({tintColor})=>{
			return <Image
				source={require('../imgs/avatar.png')}
				style={[styles.icon, {tintColor: 'red'}]}
			/>
		}
	}

	render(){
		return(
			<Button
				onPress={()=> this.props.navigation.navigate('DrawerOpen')}
				title='Go to notifications'
			/>
		)
	}
}

class MyNotificationsScreen extends Component {
	static navigationOptions ={
		drawerLabel:'Notification',
		drawerIcon: ({tintColor})=>{
			return <Image
				source={require('../imgs/avatar.png')}
				style={[styles.icon, {tintColor:tintColor}]}
			/>
		}
	}
	render(){
		return (
			<Button onPress={()=>this.props.navigation.goBack()} title='Go back home'>
		</Button>)
	}
}

const styles=StyleSheet.create({
	icon:{
		width:24,
		height:24
	}
})
const MyApp= DrawerNavigator({
	Home: {
		screen: MyHomeScreen
	},
	Notifications:{
		screen: MyNotificationsScreen,
	}
},{
	drawerWidth:240,
	drawerPosition: 'left',
})

AppRegistry.registerComponent('firstProject', ()=> MyApp)
