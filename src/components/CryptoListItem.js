import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';

const CryptoListItem = ({ item }) => {

	return (
		<View style={styles.container}>
			<Text>Hi</Text>
		</View>

	)
}

export default CryptoListItem;

const styles = StyleSheet.create({
	container: {
		padding: 8,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

	},
});