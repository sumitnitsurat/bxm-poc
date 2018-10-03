/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground,TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component {
	render() {
		return (
			<ImageBackground source={{ uri: "https://d1g7gkdx8exik0.cloudfront.net/images/backgrounds/hero_malaysia_full_small.jpg" }} style={styles.container}>
				<Text style={styles.welcome}> Welcome to BXM!</Text>
				<Text style={[styles.welcome, {fontWeight: "normal"}]}> Your guide into the crypto world.</Text>
				<FormLabel>Email</FormLabel>
				<FormInput />
				{/* <FormValidationMessage>Error message</FormValidationMessage> */}
				<FormLabel>Password</FormLabel>
				<FormInput />
				{/* <FormValidationMessage>Error message</FormValidationMessage> */}
				<Button backgroundColor="orange" title='LOGIN' buttonStyle={{marginTop: 20}} />
				<Text style={{fontSize: 12, color: '#fff', margin: 10}}> not a member yet? <Text>Sign Up </Text> </Text>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcomeWrapper: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		fontSize: 25,
		textAlign: 'center',
		margin: 10,
		color: "#fff",
		fontWeight: "bold"
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	input: {height: 40, borderColor: 'gray', borderWidth: 1, width: '100%'}

});
