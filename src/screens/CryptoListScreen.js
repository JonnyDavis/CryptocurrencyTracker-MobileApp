import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';


class CryptoListScreen extends React.Component {
  static navigationOptions = {
  	title: 'Cryptocurrency Tracker'
  };

	render() {
		return (
			<View styles={styles.container}>
				<Text>Placeholder</Text>
			</View> 
		);
	};

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});