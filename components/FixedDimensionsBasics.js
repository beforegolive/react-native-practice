import React, { Component } from 'react'
import {View} from 'react-native'

class FixedDimensionsBasics extends Component {
	render(){
		return (
			<View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
				<View style={{width:50,height:50, backgroundColor:'powderblue'}} />
				<View style={{width:50,height:50, backgroundColor:'skyblue'}} />
				<View style={{width:50,height:50, backgroundColor:'steelblue'}} />
			</View>
		)
	}
}

export default FixedDimensionsBasics
