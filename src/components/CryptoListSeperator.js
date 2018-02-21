import React from 'react';
import { View, StyleSheet } from 'react-native';


const CryptoListSeperator = () => {
	return (
		<View style={styles.container} />
	);
};

export default CryptoListSeperator;

const styles = StyleSheet.create({
	container: {
		marginLeft: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	}
});