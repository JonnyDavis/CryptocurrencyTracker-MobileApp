import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

import { getFilmsSelector, fetchCoinData } from '../store/cryptocurrencies'

const mapStateToProps = (state) => {
	return {
		crypto: state.crypto
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCoinData: () => dispatch(fetchCoinData()),
	};
};



class CryptoListScreen extends React.Component {
  static navigationOptions = {
  	title: 'Cryptocurrency Tracker'
  };

  componentDidMount() {
  	this.props.fetchCoinData()
  }

	render() {
		return (
			<View style={styles.container}>
				<Text>Placeholder</Text>
			</View> 
		);
	};


};

const CryptoListScreenWithState = connect(mapStateToProps, mapDispatchToProps)(CryptoListScreen);


export default CryptoListScreenWithState;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

