import React, { Component } from 'react'
import {AppRegistry, Text, View, Button} from 'react-native'
import {TabNavigator} from 'react-navigation'

class RecentChatScreen extends Component {
	render(){
		return (
			<View>
				<Text>List of recent chats</Text>
				<Button
				  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
				  title="Chat with Lucy"
				/>
			</View>
		)
	}
}

class AllContactsScreen extends Component {
	render(){
		return (
			<View>
				<Text>List of recent contacts</Text>
				<Button
				  onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
				  title="Chat with Jane"
				/>
			</View>
		)
	}
}

const MainScreenNavigator = TabNavigator({
	Recent: {screen: RecentChatScreen},
	All: {screen: AllContactsScreen}
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
	tabBarPosition:'top',
	showLabel: 'false'
})

AppRegistry.registerComponent('firstProject', () => MainScreenNavigator);

export default MainScreenNavigator
