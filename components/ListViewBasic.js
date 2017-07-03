import React, { Component } from 'react'
import { ListView, View, Text} from 'react-native'

class ListViewBasic extends Component {
	constructor(props){
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !==r2 })
		this.state ={
			dataSource: ds.cloneWithRows([
				'John', 'Joel','James','Jimmy','Jackson','Jacky','Julie'
			])
		}
	}
	render(){
		return(
			<View style={{flex:1, paddingTop: 62}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData)=> <Text>{rowData}</Text>} />
			</View>
		)
	}
}

export default ListViewBasic
