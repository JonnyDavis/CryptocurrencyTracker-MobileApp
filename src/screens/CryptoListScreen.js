import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';


class CryptoListScreen extends React.Component {
  static navigationOptions = {
  	title: 'Cryptocurrency Tracker'
  };

	render() {
		return (
			<View style={styles.container}>
				<Text>Placeholder</Text>
			</View> 
		);
	};


};

export default CryptoListScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

