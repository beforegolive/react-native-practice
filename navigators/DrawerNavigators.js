import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  StyleSheet,
  View,
  Text,
	FlatList,
	TextInput,
	Platform,
	Animated,
	InteractionManager
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
import PlatformButton from './components/platformButton'

class MyHomeScreen extends Component {
	state = {
		val: new Animated.Value(0)
	}
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={require('../imgs/avatar.png')}
          style={[styles.icon, { tintColor: 'red' }]}
        />
      );
    }
  };

	componentDidMount(){
    setTimeout(()=>{
      SplashScreen.hide()
    }, 1000)

		setImmediate(()=>{
			console.log('---------------------- setImmediate1',)
		})
		Animated.timing(
			this.state.val,
			{
				toValue:1,
				duration:3000
			}
		).start()
		console.log('---------------------componentDidMount')
		setTimeout(()=>{
			console.log('------------------setTimeout 0',)
		},0)
		requestAnimationFrame(()=>{
			console.log('------------------- requestAnimationFrame',)
		})

		setImmediate(()=>{
			console.log('---------------------- setImmediate2',)
		})

		InteractionManager.runAfterInteractions(() => {
  	console.log('----------------------------- InteractionManager.runAfterInteractions',)
	})

		debugger;

	}

  render() {
		setImmediate(()=>{
			console.log('---------------------- setImmediate 3',)
		})
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Go to notifications  wifi app123"
          style={styles.marginAll}
        />
        <Text style={styles.marginAll}>this is Text</Text>
        <Button style={[styles.marginAll]} color="red" title="另外一个button"
					onPress={()=>{
						console.log('Platform.OS:',Platform.OS)
						console.log('Platform.Version:',Platform.Version)
						console.log('Platform:', Platform)
					}
				} />
				<TextInput value='abcd' editable={true} ></TextInput>
				<PlatformButton />
				<Animated.Image style={{opacity:this.state.val}} source={require('../imgs/avatar.png')} >
					<Text>写点字</Text>
				</Animated.Image>
				<FlatList
					data={[{key:'a', id:1},{key:'b',id:2},{key:'c', id:3}]}
					renderItem={({item})=> <Text>{item.key}</Text>}
					keyExtractor={(item)=> item.id}
				/>
      </View>
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notification',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={require('../imgs/avatar.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      );
    }
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  marginAll: {
    marginTop: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    paddingVertical: 30,
    paddingHorizontal: 20,
    bottom: 30,
    zIndex: 10000,
    width: '80%'
  },
  btn: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});

const absoluteStyles = StyleSheet.absoluteFill;

const MyApp = DrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    drawerWidth: 240,
    drawerPosition: 'left'
  }
);

export default MyApp
