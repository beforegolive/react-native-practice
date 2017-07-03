import React, { Component } from 'react'
import { Text, View} from 'react-native'

class Blink extends Component {
	state= {
		showText:true
	}
	componentDidMount(){
		setInterval(()=>{
			this.setState({ showText: !this.state.showText})
		}, 1000)
	}
	render(){
		const display= this.state.showText ? this.props.text: ''
		return <Text>{display}</Text>
	}
}

class BlinkApp extends Component {
	render(){
		return(
			<View>
				<Blink  text="Hello World"/>
				<Blink  text="From Jacky"/>
				<Blink  text="And ......"/>
			</View>
		)
	}
}

export default BlinkApp
