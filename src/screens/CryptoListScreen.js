import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import CryptoList from '../components/CryptoList';
import { getCryptoSelector, fetchCoinData, actionCreators } from '../store/cryptocurrencies';

const mapStateToProps = (state) => {
	return {
		crypto: getCryptoSelector(state)
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
				<CryptoList crypto={this.props.crypto} />
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

