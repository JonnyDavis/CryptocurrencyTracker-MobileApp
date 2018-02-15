import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';


const mapStateToProps = (state) => {
	return {
		crypto: state.crypto
	}
}



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

const CryptoListScreenWithState = connect(mapStateToProps)(CryptoListScreen);


export default CryptoListScreenWithState;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

