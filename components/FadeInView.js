import React, { Component } from 'react'
import {Animated, Text} from 'react-native'
class FadeInView extends Component {
	constructor(props){
		super(props)
		this.state={
			fadeAnim: new Animated.Value(0)
		}
	}

	componentDidMount(){
		Animated.timing(
			this.state.fadeAnim,
			{
				toValue:1,
				duration: 3000
			}
		).start()
	}

	render(){
		return(
			<Animated.View
				style={{
					...this.props.style,
					opacity: this.state.fadeAnim
				}}
				>
					{this.props.children}
			</Animated.View>
		)
	}
}

const FadeInViewApp = () =>{
	return(
		<FadeInView style={{width:250, height:50, backgroundColor:'powderblue'}}>
			<Text style={{fontSize:28, textAlign:'center', margin:10}}>Fading In</Text>
		</FadeInView>
	)
}

export default FadeInViewApp
