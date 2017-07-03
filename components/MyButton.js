import React, { Component } from 'react'
import { TouchableHighlight, Text} from 'react-native'
class MyButton extends Component {
	_onPressButton(){
		console.log('You tapped the button')
	}

	_onLongPress(){
		console.log('You are holding the button')
	}

	render(){
		return(
			<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPress} style={{padding:30}}>
				<Text>Button</Text>
			</TouchableHighlight>
		)
	}
}

export default MyButton
