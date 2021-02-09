/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, ImageBackground,TextInput} from 'react-native';

export default class App extends Component {
	// constructor(){
	// 	super()
	// 	this.state={}
	// 	this.state.customStyles ={
	// 		color:'orange'
	// 	}
	
	// setInterval(() => {
	// 	if (this.state.customStyles.color=='white'){
	// 		this.setState({
	// 			customStyles:{
	// 				color:'orange'}
	// 		})
	// 	} else
	// 	{
	// 		this.setState({
	// 			customStyles:{
	// 				color:'white'}
	// 	})
		
	// 	}
	// }, 1000);
	// }
	// constructor (){
	// 	super()
	//  	this.state={
	// 		 username:"",
	// 	     password :""
	// 	}
	// 	this.handleChangeText=this.handleChangeText.bind(this)
    //    }

    //     handleChangeText(un , pw){
	// 		this.setState({
	// 		username:un,
	// 		password:pw
	// 	})
	// 	}		
	
	render() { 
			return (
			
			<View style={styles.container}>
				
		<ImageBackground style={styles.backgroundImage} source={require('./imgs/brigde.jpeg')}  style={styles.image}> 
                 <Text style={ styles.text}>LoDeep</Text>
				<Text style={styles.text}>Study with Anyone,Anywhere,Anytime! </Text> 
				{/* <Text style={styles.text}>Username</Text>
				<TextInput style={styles.textinput}
				 defaultValue={this.state.username}
				  onChangeText={this.handleChangeText}
				/>
				<Text style={styles.textinput}>Password</Text>
				<TextInput style={styles.text} 
				defaultValue={this.setState.password}
				onChangeText={this.handleChangeText}/> */}


				{/* <TextInput style={styles.text} 
				onChangeText={this.handleChangeText}
				defaultValue='loulou'/> 
				<Text style={styles.text}>You are writing{this.state.value} </Text> */}

                </ImageBackground> 
			

			</View>
		);
	}
}
const styles = StyleSheet.create({
	textInput: {
		justifyContent: "center",
		alignItems: "stretch",
		borderRightWidth: 30,
		borderLeftWidth: 30,
		height: 50,
		borderColor: "#FFFFFF",
	  },
	container: {
	  flex: 1,
	  flexDirection: "row"
	},
	image: {
	  flex: 1,
	  resizeMode: 'stretch',
	  justifyContent: "center"
	},
	text: {
	  color: "white",
	  fontSize: 20,
	  fontWeight: "normal",
	  textAlign: "center",
	},
	backgroundImage: {
		flex : 1,
		flexDirection: "column",
		justifyContent: 'center',
		alignItems: 'center'
	  }
  });
