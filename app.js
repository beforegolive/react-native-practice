import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import MainScreenNavigator from './navigators/TabNavigators'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button onPress={() => navigate('Chat', {user:'Lucy'})} title="Chat with Jacky">
          {' '}
        </Button>
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation })=>{
		const { state, setParams} = navigation
		const isInfo = state.params.mode === 'info'
		const {user}= state.params
		return {
		title: isInfo? `${user}'s Contact Info`:`Chat With ${user}`,
		headerRight: (
			<Button
				title={isInfo ? 'Done' : `${user}'s info`}
				onPress={()=> setParams({mode: isInfo?'none':'info'})}
			/>
		)
	}}

  render() {
		const { params } = this.props.navigation.state
		return(
			<View>
	      <Text>Chat with {params.user}</Text>
	    </View>
		)
  }
}

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
	headerBackTitle: null,
	headerStyle:{backgroundColor: '#ccc'}
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('firstProject', () => SimpleApp);
